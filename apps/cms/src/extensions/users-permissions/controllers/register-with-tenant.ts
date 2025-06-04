import {factories} from '@strapi/strapi';
import {Role} from '../../../types/role.enum';

export default async (ctx) => {
    const {email, password} = ctx.request.body;

    if (!email || !password) {
      return ctx.badRequest('Email and password are required');
    }

    const existingUser = await strapi
      .query('plugin::users-permissions.user')
      .findOne({
        where: {email},
      });

    if (existingUser) {
      return ctx.badRequest('User already exists');
    }

    const user = await strapi.plugin('users-permissions').service('user').add({
      email,
      username: email, // Itt automatizáljuk a username-et
      password,
      confirmed: true,
    });

    // Tenant létrehozása és összekapcsolás
    const tenant = await strapi.entityService.create('api::tenant.tenant', {
      data: {
        name: email,
        users: [user.id],
      },
    });

    await strapi.entityService.update(
      'plugin::users-permissions.user',
      user.id,
      {
        data: {
          tenant: tenant.id,
          tenantRole: Role.TenantAdmin,
        },
      } as any,
    );

    // Token generálása
    const token = strapi.plugin('users-permissions').service('jwt').issue({
      id: user.id,
    });

    ctx.send({
      jwt: token,
      user,
    });
  };