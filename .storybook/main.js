// @ts-nocheck
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: true,
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];

    return config;
  },
};
