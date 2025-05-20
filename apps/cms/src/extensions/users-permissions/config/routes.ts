export default [
  {
    method: "POST",
    path: "/auth/register-with-tenant",
    handler: "custom.registerWithTenant",
    config: {
      auth: false,
    },
  },
];
