export default [
  {
    method: 'GET',
    path: '/auth/custom',
    handler: 'auth.customLogin',
    config: {
      policies: [],
      middlewares: [],
      type: 'content-api',
    },
  },
  {
    method: 'POST',
    path: '/auth/register-with-tenant',
    handler: 'auth.registerWithTenant',
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
