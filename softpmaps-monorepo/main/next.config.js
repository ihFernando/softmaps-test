const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@softmaps'])
const withImages = require('next-images')


const nextConfig = {
  distDir: '.next',
  generateEtags: true,
  poweredByHeader: false,
}

module.exports = withPlugins(
  [
    [
      withImages,
      {
        inlineImageLimit: 512,
      },
    ],
    [withTM],
  ],
  nextConfig,
)
