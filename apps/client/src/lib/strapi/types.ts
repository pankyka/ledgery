export interface IUser {
  id: number;
  email: string;
  name?: string;
  tenant?: number | ITenant;
  [key: string]: any;
}

export interface ITenant {
  id: number;
  name: string;
  slug?: string;
  [key: string]: any;
}

export interface ITeamMember {
  id: number;
  user: IUser;
  tenantRole: string;
}

export interface TenantWithMembers extends ITenant {
  teamMembers: ITeamMember[];
  planName?: string | null;
  subscriptionStatus?: string | null;
}

export interface ActivityLog {
  id: number;
  activity: ActivityType | string;
  timestamp: string | Date;
  user?: number | IUser;
  tenant?: number | ITenant;
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
