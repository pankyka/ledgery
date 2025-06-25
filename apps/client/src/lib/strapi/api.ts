import { cookies } from 'next/headers';
import { strapiFetch } from './strapi-client';
import { ActivityAction, ActivityType } from './types';

export async function getJwt() {
  return (await cookies()).get('jwt')?.value || null;
}

export async function setJwt(token: string) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  (await cookies()).set('jwt', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    expires,
  });
}

export async function clearJwt() {
  (await cookies()).delete('jwt');
}

export async function login(email: string, password: string) {
  const data = await strapiFetch<{ jwt: string; user: any }>('/auth/local', {
    method: 'POST',
    body: JSON.stringify({ identifier: email, password }),
  });
  await setJwt(data.jwt);
  return data;
}

export async function registerWithTenant(email: string, password: string) {
  const data = await strapiFetch<{ jwt: string; user: any }>(
    '/auth/local/register-with-tenant',
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    },
  );
  await setJwt(data.jwt);
  return data;
}

export async function getCurrentUser() {
  const token = await getJwt();
  if (!token) return null;
  try {
    return await strapiFetch<any>('/users/me', {}, token);
  } catch {
    return null;
  }
}

export async function fetchTenant(id: string | number) {
  const token = await getJwt();
  return strapiFetch<any>(
    `/tenants/${id}?populate=deep`,
    {},
    token || undefined,
  );
}

export async function fetchInvoices() {
  const token = await getJwt();
  return strapiFetch<any>('/invoices', {}, token || undefined);
}

export async function postActivity(activityType: ActivityType, activity: ActivityAction) {
  const token = await getJwt();
  if (!token) return;
  await strapiFetch('/activity-logs', {
    method: 'POST',
    body: JSON.stringify({ data: { activityType, activity } }),
  }, token);
}
