export default ({env}) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      // providers: {
      //   google: {
      //     clientId: process.env.GOOGLE_CLIENT_ID,
      //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //     redirectUri: "http://localhost:1337/api/connect/google/callback",
      //   },
      //   microsoft: {
      //     clientId: process.env.MICROSOFT_CLIENT_ID,
      //     clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      //     redirectUri: "http://localhost:1337/api/connect/microsoft/callback",
      //   },
      // },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      // set this to true if you want to enable the playground in production
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  logz: {
    enabled: true,
    config: {
      skipList: [],
    },
  },
});
