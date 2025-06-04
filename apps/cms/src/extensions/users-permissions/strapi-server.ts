export default plugin => {
  const rawAuth = plugin.controllers.auth({strapi});

  const auth = ({strapi}) => {
    return {
      ...rawAuth,
      registerWithTenant: async ctx => {
        ctx.send({ok: true, user: 'test'});
      },
    };
  };

  plugin.controllers.auth = auth;
  return plugin;
};
