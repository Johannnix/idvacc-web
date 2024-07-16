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
    ],
    loader: 'default', // or use your custom loader if necessary
    // remotePatterns: [  // You can remove this section if not needed
    //   {
    //     protocol: 'https',
    //     hostname: 'images.unsplash.com',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'source.unsplash.com',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'vatsim-forums.nyc3.digitaloceanspaces.com',
    //   },
    // ],
  },
};
