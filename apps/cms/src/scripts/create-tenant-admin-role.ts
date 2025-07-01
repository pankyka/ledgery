import type { Core } from '@strapi/strapi';
import { TenantRole } from '../types/tenant-role.enum';

export default async function createTenantRoles(strapi: Core.Strapi) {
  const existing = await strapi.db
  .query('plugin::users-permissions.role')
  .findOne({
    where: { name: TenantRole.TenantOwner },
  });

if (!existing) {
  await strapi.db.query('plugin::users-permissions.role').create({
    data: {
      name: TenantRole.TenantOwner,
      description: 'Owner of a specific tenant',
      type: 'tenant-owner',
    },
  });
  strapi.log.info('✅ TenantOwner role létrehozva.');
} else {
  strapi.log.info('ℹ️ TenantOwner role már létezik.');
}

  const existing1 = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({
      where: { name: TenantRole.TenantAdmin },
    });

  if (!existing1) {
    await strapi.db.query('plugin::users-permissions.role').create({
      data: {
        name: TenantRole.TenantAdmin,
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
      where: { name: TenantRole.TenantUser },
    });

  if (!existing2) {
    await strapi.db.query('plugin::users-permissions.role').create({
      data: {
        name: TenantRole.TenantUser,
        description: 'User of a specific tenant',
        type: 'tenant-user',
      },
    });
    strapi.log.info('✅ TenantUser role létrehozva.');
  } else {
    strapi.log.info('ℹ️ TenantUser role már létezik.');
  }

  const existing3 = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({
      where: { name: TenantRole.TenantViewer },
    });

  if (!existing3) {
    await strapi.db.query('plugin::users-permissions.role').create({
      data: {
        name: TenantRole.TenantViewer,
        description: 'Readonly viewer role of a specific tenant',
        type: 'tenant-viewer',
      },
    });
    strapi.log.info('✅ TenantViewer role létrehozva.');
  } else {
    strapi.log.info('ℹ️ TenantViewer role már létezik.');
  }
}
