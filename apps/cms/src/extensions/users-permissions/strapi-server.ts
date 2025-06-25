import registerWithTenant from './controllers/register-with-tenant';

export default plugin => {
  const originalAuthFactory = plugin.controllers.auth;

  plugin.controllers.auth = ({ strapi }) => {
    const originalAuth = originalAuthFactory({ strapi });

    originalAuth.registerWithTenant = registerWithTenant;

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
