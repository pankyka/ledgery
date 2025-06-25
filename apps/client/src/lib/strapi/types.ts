export interface User {
  id: number;
  email: string;
  name?: string;
  tenant?: number | Tenant;
  [key: string]: any;
}

export interface Tenant {
  id: number;
  name: string;
  slug?: string;
  [key: string]: any;
}

export interface TeamMember {
  id: number;
  user: User;
  tenantRole: string;
}

export interface TenantWithMembers extends Tenant {
  teamMembers: TeamMember[];
  planName?: string | null;
  subscriptionStatus?: string | null;
}

export interface ActivityLog {
  id: number;
  activity: ActivityType | string;
  timestamp: string | Date;
  user?: number | User;
  tenant?: number | Tenant;
  userRoles?: string;
}

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
}
