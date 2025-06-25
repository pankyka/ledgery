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
      const filterObj: any = ctx.query?.filters || {};
      ctx.query = {
        ...ctx.query,
        filters: {
          ...filterObj,
          tenant: tenantId,
        },
      };
      return await super.find(ctx);
    },
  })
);
