import slugify from 'slugify';
import {pick} from 'lodash';
import {Role} from '../../../types/role.enum';

const generateSlugFromEmail = (email: string) => {
  const name = email.split('@')[0].replace(/[+]/gi, '-');
  const now = new Date();
  const time = `${now.getHours()}${now.getMinutes()}`;
  return slugify(`${name}${time}`, {lower: true});
};

export default async ctx => {
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

  let user = await strapi.plugin('users-permissions').service('user').add({
    email,
    username: email, // Itt automatizáljuk a username-et
    password,
    confirmed: true,
  });

  // Tenant létrehozása és összekapcsolás
  const generatedName = email.split('@')[0] + Date.now().toString().slice(-4);
  const tenant = await strapi.entityService.create('api::tenant.tenant', {
    data: {
      name: generatedName,
      slug: generateSlugFromEmail(email),
    },
  });

  user = await strapi.entityService.update(
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
    user: pick(user, ['id', 'locale', 'email', 'tenantRole', 'role']),
  });
};
