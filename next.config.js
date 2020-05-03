const withSass = require('@zeit/next-sass');

require('dotenv').config();

module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    WEB_URI: process.env.WEB_URI,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
  },
});
