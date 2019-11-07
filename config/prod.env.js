'use strict'
module.exports = {
  NODE_ENV: '"production"',
  chainWebpack: config => {
  config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
