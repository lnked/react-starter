const webpack = require('webpack')
const define = require('../define')

const Critters = require('critters-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const ReplacePlugin = require('replace-bundle-webpack-plugin')

const plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map'
  }),

  new WebpackChunkHash(),

  new webpack.optimize.ModuleConcatenationPlugin(),

  new webpack.optimize.AggressiveMergingPlugin({
    minSizeReduce: 1.6,
  }),

  new webpack.IgnorePlugin(/^(react-dev-utils|mobx-react-devtools)$/),

  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

  new WebpackManifestPlugin({
    basePath: define.rs_output_path,
    fileName: '../webpack-manifest.json',
  }),

  new Critters({
    fonts: false,
    external: false,
    preload: 'js-lazy',
    preloadFonts: true,
  }),

  new ReplacePlugin([
    {
      pattern: /\/users\/lnked\/web\/[\s\w\-.]+\/(src\/)?[\s\w\-./<>]+/gi,
      replacement: () => {
        return ''
      },
    },
  ]),

  new webpack.HashedModuleIdsPlugin(),
]

module.exports.config = plugins
