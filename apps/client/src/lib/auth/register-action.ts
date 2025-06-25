'use server';

import { validatedAction } from '@/lib/auth/middleware';
import { createCheckoutSession } from '@/lib/payments/stripe';
import { registerWithTenant } from '@/lib/strapi/api';
import { getTeamForUser } from '@/lib/strapi/queries';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const registerAction = validatedAction(
  registerSchema,
  async (data, formData) => {
    const { email, password } = data;
    try {
      await registerWithTenant(email, password);
    } catch (e) {
      console.error(e);
      return {
        error: 'Failed to create user. Please try again.',
        email,
        password,
      };
    }

    const redirectTo = formData.get('redirect') as string | null;
    if (redirectTo === 'checkout') {
      const priceId = formData.get('priceId') as string;
      const team = await getTeamForUser();
      return createCheckoutSession({ team, priceId });
    }

    redirect('/dashboard');
  },
);
