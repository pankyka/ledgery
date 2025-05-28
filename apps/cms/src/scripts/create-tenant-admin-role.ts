import type {Core} from '@strapi/strapi';

export default async function createTenantAdminRole(strapi: Core.Strapi) {
  const existing = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({
      where: {name: 'TenantAdmin'},
    });

  if (!existing) {
    await strapi.db.query('plugin::users-permissions.role').create({
      data: {
        name: 'TenantAdmin',
        description: 'Administrator of a specific tenant',
        type: 'tenant-admin',
      },
    });
    strapi.log.info('✅ TenantAdmin role létrehozva.');
  } else {
    strapi.log.info('ℹ️ TenantAdmin role már létezik.');
  }
}
