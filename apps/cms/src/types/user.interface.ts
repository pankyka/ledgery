import { Tenant } from './tenant.interface';
import { UserDetail } from './user-detail.interface';

export type TenantRole = 'TenantAdmin' | 'TenantUser';

export interface User {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  provider: string;
  tenant?: Tenant;
  tenantRole?: TenantRole;
  userDetail?: UserDetail;
}
