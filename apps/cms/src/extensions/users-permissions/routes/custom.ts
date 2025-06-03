export default [
  {
    method: "POST",
    path: "/auth/register-with-tenant",
    handler: "register.registerWithTenant",
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/auth/confirm-email',
    handler: 'confirm.confirmEmail',
    config: {
      auth: false
    }
  }
];
