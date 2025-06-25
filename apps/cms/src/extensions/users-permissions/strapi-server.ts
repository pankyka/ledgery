import registerWithTenant from './controllers/register-with-tenant';

export default plugin => {
  const originalAuthFactory = plugin.controllers.auth;

  plugin.controllers.auth = ({ strapi }) => {
    const originalAuth = originalAuthFactory({ strapi });

    originalAuth.registerWithTenant = registerWithTenant;

    const authLoginFn =
      typeof originalAuth.login === 'function'
        ? 'login'
        : typeof originalAuth.callback === 'function'
          ? 'callback'
          : null;

    if (authLoginFn) {
      const defaultFn = originalAuth[authLoginFn];

      originalAuth[authLoginFn] = async ctx => {
        const result = await defaultFn(ctx);

        try {
          const user = ctx.state?.user;
          const tenant = user?.tenant;

          if (user && tenant) {
            await strapi
              .service('api::tenant-activity.tenant-activity')
              .log(user, tenant, 'SIGN_IN', ctx.request.ip);
          }
        } catch (err) {
          strapi.log.error('Failed to log sign in activity', err);
        }

        return result;
      };
    }

    return originalAuth;
  };

  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/auth/local/register-with-tenant',
    handler: 'auth.registerWithTenant',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      prefix: '',
      type: 'content-api',
    },
  });

  return plugin;
};
