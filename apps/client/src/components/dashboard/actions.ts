'use server';

import { clearJwt } from '@/lib/strapi/api';

export async function logoutAction() {
  await clearJwt();
}
