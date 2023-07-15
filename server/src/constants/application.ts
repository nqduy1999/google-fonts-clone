const base = '/api';

export default {
  url: {
    base,
  },
  timers: {
    userCookieExpiry: '720h',
  },
  env: {
    authSecret: process.env.TOKEN_SECRET_KEY || 'test',
    appSecret: process.env.APP_SECRET_KEY,
  },
  authorizationIgnorePath: [`/api/auth/login`],
};
