import registerController from './controllers/register';

export default plugin => {
  console.log('🔁 Registering custom controller: registerWithTenant');

  // plugin.controllers.user = {
  //   ...plugin.controllers.user,
  //   ...registerController,
  // };

  // Capture the original factory function for the `auth` controller
  const originalAuthFactory = plugin.controllers.auth;

  // Create a new factory function that extends the original
  plugin.controllers.auth = ({strapi}) => {
    const originalAuth = originalAuthFactory({strapi});

    // Add a custom function to the `auth` controller
    originalAuth.registerWithTenant = registerController.registerWithTenant;

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
      type: 'content-api',
    },
  });

  setTimeout(() => {
    const routes = strapi.server.router.stack
      .filter(layer => layer?.path && layer?.methods?.length)
      .map(layer => ({
        method: layer.methods.join(','),
        path: layer.path,
      }));

    console.log('📡 Regisztrált útvonalak:');
    console.table(routes);
  }, 500); // kell egy kis késleltetés, amíg router kész

  return plugin;
};
