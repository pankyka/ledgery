'use server';

import { redirect } from 'next/navigation';
import { clearJwt, postActivity } from '@/lib/strapi/api';
import { ActivityType } from '@/lib/strapi/types';

export async function logoutAction() {
  await postActivity(ActivityType.SIGN_OUT);
  await clearJwt();
  redirect('/');
}
