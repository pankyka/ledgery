import { TenantRole } from './tenant-role.enum';
import { Tenant } from './tenant.interface';
import { UserDetail } from './user-detail.interface';

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
