const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  withImages,
], {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});