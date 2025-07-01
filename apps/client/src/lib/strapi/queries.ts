import { strapiFetch } from './strapi-client';
import { getJwt } from './api';
import type { IActivityLog, ITenantWithMembers, IUser } from './types';

export async function getUser(): Promise<IUser | null> {
  const token = await getJwt();
  if (!token) return null;
  try {
    const u = await strapiFetch<IUser>('/users/me?populate=userDetail', {}, token);
    return u;
  } catch (err) {
    return null;
  }
}

export async function getTeamForUser(): Promise<ITenantWithMembers | null> {
  const user = await getUser();
  if (!user || !user.tenant) return null;
  const token = await getJwt();
  return strapiFetch<ITenantWithMembers>(
    `/tenants/${
      typeof user.tenant === 'object' ? user.tenant.id : user.tenant
    }?populate=teamMembers.user`,
    {},
    token || undefined,
  );
}

export async function getActivityLogs(): Promise<IActivityLog[]> {
  const user = await getUser();
  if (!user || !user.tenant) return [];
  const tenantId = typeof user.tenant === 'object' ? user.tenant.id : user.tenant;
  const token = await getJwt();
  return strapiFetch<IActivityLog[]>(
    `/tenant-activities?filters[tenant]=${tenantId}&sort=timestamp:desc`,
    {},
    token || undefined,
  );
}
