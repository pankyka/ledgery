const registerController = require('./controllers/register');

module.exports = (plugin) => {
  console.log('🔁 Registering custom controller: registerWithTenant');

  plugin.controllers.user = {
    ...plugin.controllers.user,
    ...registerController,
  };

  return plugin;
};