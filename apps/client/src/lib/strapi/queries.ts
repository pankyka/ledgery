import { strapiFetch } from './strapi-client';
import { getJwt } from './api';
import type { ActivityLog, TenantWithMembers, User } from './types';

export async function getUser(): Promise<User | null> {
  const token = await getJwt();
  if (!token) return null;
  try {
    return await strapiFetch<User>('/users/me', {}, token);
  } catch {
    return null;
  }
}

export async function getTeamForUser(): Promise<TenantWithMembers | null> {
  const user = await getUser();
  if (!user || !user.tenant) return null;
  const token = await getJwt();
  return strapiFetch<TenantWithMembers>(
    `/tenants/${
      typeof user.tenant === 'object' ? user.tenant.id : user.tenant
    }?populate=teamMembers.user`,
    {},
    token || undefined,
  );
}

export async function getActivityLogs(): Promise<ActivityLog[]> {
  const token = await getJwt();
  return strapiFetch<ActivityLog[]>('/activity-logs', {}, token || undefined);
}
