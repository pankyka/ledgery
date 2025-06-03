import type {Core} from '@strapi/strapi';

export default async function createTenantRoles(strapi: Core.Strapi) {
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

  const existing2 = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({
      where: {name: 'TenantUser'},
    });

  if (!existing2) {
    await strapi.db.query('plugin::users-permissions.role').create({
      data: {
        name: 'TenantUser',
        description: 'User of a specific tenant',
        type: 'tenant-user',
      },
    });
    strapi.log.info('✅ TenantUser role létrehozva.');
  } else {
    strapi.log.info('ℹ️ TenantUser role már létezik.');
  }
}
