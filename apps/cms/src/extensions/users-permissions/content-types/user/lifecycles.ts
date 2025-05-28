import {factories} from '@strapi/strapi';

export default factories.createCoreController(
  'plugin::users-permissions.user',
  ({strapi}) => ({
    async afterCreate(event) {
      const {result} = event;
      const userEmail = result.email;
      const timeSuffix = new Date()
        .toLocaleTimeString('hu-HU', {hour: '2-digit', minute: '2-digit'})
        .replace(':', '');
      const tenantName = userEmail.split('@')[0] + timeSuffix;

      const existingRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({
          where: {name: 'TenantAdmin'},
        });

      const newTenant = await strapi.entityService.create(
        'api::tenant.tenant',
        {
          data: {name: tenantName},
        },
      );

      await strapi.entityService.update(
        'plugin::users-permissions.user',
        result.id,
        {
          data: {
            tenant: newTenant.id,
            role: existingRole?.id,
          } as any,
        },
      );
    },
  }),
);
