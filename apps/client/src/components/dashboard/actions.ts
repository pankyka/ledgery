'use server';

import { redirect } from 'next/navigation';
import { clearJwt, postActivity } from '@/lib/strapi/api';
import { ActivityAction } from '@/lib/strapi/types';

export async function logoutAction() {
  // await postActivity(ActivityAction.SIGN_OUT);
  await clearJwt();
  redirect('/');
}
