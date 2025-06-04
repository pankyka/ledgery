import registerController from './controllers/register';

export default (plugin) => {
  plugin.controllers.user = {
    ...plugin.controllers.user,
    ...registerController,
  };

  return plugin;
};