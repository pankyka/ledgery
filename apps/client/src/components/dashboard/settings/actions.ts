'use server';

import { validatedActionWithUser } from '@/lib/auth/middleware';
import { saveUserDetail } from '@/lib/strapi/api';
import { z } from 'zod';

const detailsSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  orgName: z.string().optional(),
  orgTaxNumber: z.string().optional(),
  orgAddress: z.string().optional(),
});

export const saveGeneralSettings = validatedActionWithUser(
  detailsSchema,
  async (data, _formData, user) => {
    await saveUserDetail(user.id, data);
    return { success: 'saved' };
  },
);
