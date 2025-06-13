import {errors, getService} from '@strapi/utils';
import slugify from 'slugify';
import {pick} from 'lodash';
import {Role} from '../../../types/role.enum';

const {ApplicationError, ValidationError, ForbiddenError} = errors;

const generateSlugFromEmail = (email: string) => {
  const name = email.split('@')[0].replace(/[+]/gi, '-');
  const now = new Date();
  const time = `${now.getHours()}${now.getMinutes()}`;
  return slugify(`${name}${time}`, {lower: true});
};

const getService = name => {
  return strapi.plugin('users-permissions').service(name);
};

const sanitizeUser = (user, ctx) => {
  const {auth} = ctx.state;
  const userSchema = strapi.getModel('plugin::users-permissions.user');

  return strapi.contentAPI.sanitize.output(user, userSchema, {auth});
};

export default async ctx => {
  const provider = ctx.params.provider || 'local';
  const {email, password} = ctx.request.body;

  const pluginStore = await strapi.store({
    type: 'plugin',
    name: 'users-permissions',
  });

  const settings: any = await pluginStore.get({key: 'advanced'});

  if (!settings.allow_register) {
    throw new ApplicationError('Register action is currently disabled');
  }

  if (!email || !password) {
    return ctx.badRequest('Email and password are required');
  }

  const role = await strapi
    .query('plugin::users-permissions.role')
    .findOne({where: {type: settings.default_role}});

  if (!role) {
    throw new ApplicationError('Impossible to find the default role');
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
    provider,
    email,
    role: role.id,
    username: email, // Itt automatizáljuk a username-et
    password,
    confirmed: !settings.email_confirmation,
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

  const sanitizedUser = await sanitizeUser(user, ctx);

  if (settings.email_confirmation) {
    try {
      await getService('user').sendConfirmationEmail(sanitizedUser);
    } catch (err) {
      strapi.log.error(err);
      throw new ApplicationError('Error sending confirmation email');
    }

    return ctx.send({user: sanitizedUser});
  }

  // Token generálása
  const token = strapi.plugin('users-permissions').service('jwt').issue({
    id: user.id,
  });

  ctx.send({
    jwt: token,
    user: pick(user, ['id', 'locale', 'email', 'tenantRole', 'role']),
  });
};
