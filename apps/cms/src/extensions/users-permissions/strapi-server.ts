import registerWithTenant from './controllers/register-with-tenant';

export default plugin => {
  const originalAuthFactory = plugin.controllers.auth;

  plugin.controllers.auth = ({strapi}) => {
    const originalAuth = originalAuthFactory({strapi});

    originalAuth.registerWithTenant = registerWithTenant;

    return originalAuth;
  };

  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/auth/register-with-tenant',
    handler: 'auth.registerWithTenant',
    prefix: 'local',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      prefix: 'local',
      type: 'content-api',
    },
  });

  return plugin;
};
