export default [
  {
    method: 'POST',
    path: '/auth/register-with-tenant',
    handler: 'register.registerWithTenant',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      type: 'content-api',
    },
  },
  {
    method: 'GET',
    path: '/auth/confirm-email',
    handler: 'confirm.confirmEmail',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
      type: 'content-api',
    },
  },
];
