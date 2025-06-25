'use server';

import { clearJwt } from '@/lib/strapi/api';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  await clearJwt();
  redirect('/');
}
