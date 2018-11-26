const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')
// const CompressionPlugin = require("compression-webpack-plugin")

const threshold = 0

const plugins = [
  new BrotliGzipPlugin({
    test: /\.(js|cs{2}|html|svg)$/,
    asset: '[path].br[query]',
    algorithm: 'brotli',
    threshold,
    minRatio: 0.8,
    quality: 11,
    deleteOriginalAssets: true,
  }),
  new BrotliGzipPlugin({
    test: /\.(js|cs{2}|html|svg)$/,
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    threshold,
    minRatio: 0.8,
    deleteOriginalAssets: true,
  }),
  // new CompressionPlugin({
  //   test: /\.(js|css|html|svg)$/,
  //   asset: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   threshold: threshold,
  //   minRatio: 0.8,
  //   deleteOriginalAssets: true
  // })
]

module.exports.config = plugins
