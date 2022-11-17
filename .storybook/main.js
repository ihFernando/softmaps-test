const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    }
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx|css)$/,
      exclude: path.resolve(__dirname, '../node_modules/@storybook'),
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: ['jsx-control-statements'],
            presets: [require.resolve('babel-preset-react-app'), require.resolve('@babel/preset-typescript')]
          }
        }
      ]
    })
    ;(config.resolve.plugins = config.resolve.plugins || []),
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json')
        })
      )

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
}
