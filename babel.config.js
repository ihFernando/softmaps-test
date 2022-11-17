module.exports = function (api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
  ]

  const plugins = ['jsx-control-statements']

  return {
    presets,
    plugins,
    env: {
      test: {
        presets: [
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
          ['@babel/preset-env', { modules: false }]
        ],
        plugins
      }
    }
  }
}
