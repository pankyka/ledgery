export default [
  {
    method: 'POST',
    path: '/auth/register-with-tenant',
    handler: 'user.registerWithTenant',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      type: 'content-api',
    },
  },
];
