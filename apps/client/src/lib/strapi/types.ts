export interface IUserDetail {
  id: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  companyName?: string;
  taxNumber?: string;
  headquarters?: string;
}

export interface IUser {
  id: number;
  email: string;
  name?: string;
  tenant?: number | ITenant;
  userDetail?: number | IUserDetail;
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

export interface ITenantWithMembers extends ITenant {
  teamMembers: ITeamMember[];
  planName?: string | null;
  subscriptionStatus?: string | null;
}

export interface IActivityLog {
  id: number;
  activity: ActivityAction | string;
  timestamp: string | Date;
  user?: number | IUser;
  tenant?: number | ITenant;
  userRoles?: string;
}

export enum ActivityType {
  'AUTH',
  'PROFIL',
  'TEAM',
  'SETTINGS',
}

export enum ActivityAction {
  'SIGN_UP',
  'SIGN_IN',
  'SIGN_OUT',
  'UPDATE_PASSWORD',
  'DELETE_ACCOUNT',
  'UPDATE_ACCOUNT',
  'CREATE_TEAM',
  'REMOVE_TEAM_MEMBER',
  'INVITE_TEAM_MEMBER',
  'ACCEPT_INVITATION',
}
