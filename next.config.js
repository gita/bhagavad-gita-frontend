// next.config.js

const withTM = require('next-transpile-modules')(['rooks']);
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(new webpack.IgnorePlugin(/config\/relay\/server/));
    }

    return config;
  }  
};

module.exports = withPlugins([withTM], nextConfig);
