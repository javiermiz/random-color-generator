/** @type {import('next').NextConfig} */
const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Add this plugin only in dev mode
      config.plugins.push(
        new ESLintPlugin({
          context: './', // Location where it will scan all the files
          extensions: ['js', 'jsx', 'ts', 'tsx'], // File formats that should be scanned
          exclude: ['node_modules', 'dist'], // Exclude everything in these folders
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
