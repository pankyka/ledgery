import registerWithTenant from './controllers/register-with-tenant';

export default plugin => {
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
