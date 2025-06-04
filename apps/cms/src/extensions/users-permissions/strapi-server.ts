import registerWithTenant from './controllers/register-with-tenant';

export default plugin => {
  // Capture the original factory function for the `auth` controller
  const originalAuthFactory = plugin.controllers.auth;

  // Create a new factory function that extends the original
  plugin.controllers.auth = ({strapi}) => {
    const originalAuth = originalAuthFactory({strapi});

    // Add a custom function to the `auth` controller
    originalAuth.registerWithTenant = registerWithTenant;

    return originalAuth;
  };

  // Extend the plugin routes if needed
  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/auth/register-with-tenant',
    handler: 'auth.registerWithTenant',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      routesPrefix: '',
      type: 'content-api',
    },
  });

  return plugin;
};
