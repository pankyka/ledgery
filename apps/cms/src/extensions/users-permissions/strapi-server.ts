import registerController from './controllers/register';

export default plugin => {
  console.log('🔁 Registering custom controller: registerWithTenant');

  plugin.controllers.user = {
    ...plugin.controllers.user,
    ...registerController,
  };

  return plugin;
};
