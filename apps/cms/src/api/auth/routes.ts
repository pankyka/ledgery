export default [
  {
    method: 'GET',
    path: '/auth/confirm-email',
    handler: 'confirm.confirmEmail',
    config: {
      auth: false
    }
  }
];