module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-syntax-dynamic-import',
    'jsx-control-statements',
    [
      'styled-components',
      {
        ssr: true,
        displayName: false,
        preprocess: false,
      },
    ],
  ],
}
