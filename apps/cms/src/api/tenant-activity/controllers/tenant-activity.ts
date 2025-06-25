import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::tenant-activity.tenant-activity',
  ({ strapi }) => ({
    async findTenant(ctx) {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized();
      }

      const tenantId = typeof user.tenant === 'object' ? user.tenant.id : user.tenant;
      ctx.query = {
        ...ctx.query,
        filters: {
          ...(ctx.query?.filters || {}),
          tenant: tenantId,
        },
      };
      return await super.find(ctx);
    },
  })
);
