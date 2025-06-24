import { getTeamForUser } from '@/lib/strapi/queries';

export async function GET() {
  const team = await getTeamForUser();
  return Response.json(team);
}
