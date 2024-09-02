const SITE = require('./src/config.js').SITE;

module.exports = {
  reactStrictMode: true,
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: [
      'i.ibb.co',
      'cdn.vatpac.org',
      'media.discordapp.net',
      'cdn.discordapp.com',
      'static.wixstatic.com',
      'vatsim-my.nyc3.digitaloceanspaces.com',
      'vatsim-forums.nyc3.digitaloceanspaces.com',
      'i.imgur.com',
      'upload.wikimedia.org',
    ],
    loader: 'default',
  },
};
