export default {
    async customLogin(ctx) {
      ctx.send({ ok: true, user: 'test' });
    },
  };