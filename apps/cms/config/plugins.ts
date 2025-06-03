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
      // set this to true if you want to enable the playground in production
      playgroundAlways: true,
    },
  },
  'apollo-sandbox': {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: true, // process.env.NODE_ENV === 'production' ? false : true,
    config: {
      // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
    },
  },
});
