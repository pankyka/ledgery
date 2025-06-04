import registerController from './controllers/register';

export default plugin => {
  console.log('🔁 Registering custom controller: registerWithTenant');

  plugin.controllers.user = {
    ...plugin.controllers.user,
    ...registerController,
  };

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
