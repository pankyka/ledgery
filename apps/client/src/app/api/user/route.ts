import { getUser } from '@/lib/strapi/queries';

export async function GET() {
  const user = await getUser();
  return Response.json(user);
}
