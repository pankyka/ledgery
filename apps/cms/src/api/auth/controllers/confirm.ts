export default {
  async confirmEmail(ctx) {
    const { token } = ctx.request.query;

    if (!token) {
      return ctx.badRequest('Token is missing');
    }

    const user = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { confirmation_token: token },
    });

    if (!user) {
      return ctx.badRequest('Invalid token');
    }

    await strapi.entityService.update('plugin::users-permissions.user', user.id, {
      data: {
        confirmed: true,
        confirmation_token: null,
      },
    });

    ctx.send({ message: 'Email successfully confirmed' });
  },
};