'use server';

import {validatedAction} from '@/lib/auth/middleware';
import {createCheckoutSession} from '@/lib/payments/stripe';
import {
  clearJwt,
  registerWithTenant,
  login as strapiLogin,
} from '@/lib/strapi/api';
import {getTeamForUser} from '@/lib/strapi/queries';
import {redirect} from 'next/navigation';
import {z} from 'zod';

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const {email, password} = data;
  try {
    await strapiLogin(email, password);
  } catch (e) {
    console.error(e);
    return {
      error: 'Invalid email or password. Please try again.',
      email,
      password,
    };
  }

  const redirectTo = formData.get('redirect') as string | null;
  if (redirectTo === 'checkout') {
    const priceId = formData.get('priceId') as string;
    const team = await getTeamForUser();
    return createCheckoutSession({team, priceId});
  }

  redirect('/dashboard');
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const signUp = validatedAction(signUpSchema, async (data, formData) => {
  const {email, password} = data;
  try {
    await registerWithTenant(email, password);
  } catch (e) {
    console.error(e);
    return {error: 'Failed to create user. Please try again.', email, password};
  }

  const redirectTo = formData.get('redirect') as string | null;
  if (redirectTo === 'checkout') {
    const priceId = formData.get('priceId') as string;
    const team = await getTeamForUser();
    return createCheckoutSession({team, priceId});
  }

  redirect('/dashboard');
});

export async function signOut() {
  await clearJwt();
}

// The following actions from the original implementation relied heavily on the
// local database. They are left as simple stubs until matching Strapi endpoints
// are implemented.

export const updatePassword = async () => ({
  error: 'Not implemented',
});

export const deleteAccount = async () => ({
  error: 'Not implemented',
});

export const updateAccount = async () => ({
  error: 'Not implemented',
});

export const removeTeamMember = async () => ({
  error: 'Not implemented',
});

export const inviteTeamMember = async () => ({
  error: 'Not implemented',
});
