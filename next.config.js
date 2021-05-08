// next.config.js

const withTM = require('next-transpile-modules')(['rooks']);
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  experimental: {
    reactMode: 'concurrent',
  },
};

module.exports = withPlugins([withTM], nextConfig);
