export default ({env}) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY', 'dca1eb9e341f4cce290c8962f0f0156d-08c79601-7eb1d9f4'),
        domain: env('MAILGUN_DOMAIN', 'sandbox78870a2f3b884c6799ee7bb757758cf7.mailgun.org'),
        url: env('MAILGUN_URL', 'https://api.eu.mailgun.net')
      }
    },
    settings: {
      defaultFrom: 'noreply@sandbox78870a2f3b884c6799ee7bb757758cf7.mailgun.org',
      defaultReplyTo: 'support@sandbox78870a2f3b884c6799ee7bb757758cf7.mailgun.org'
    }
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      jwt: {
        expiresIn: '7d',
      },
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
