const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const define = require('../define')

const Critters = require('critters-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const ReplacePlugin = require('replace-bundle-webpack-plugin')

const plugins = [
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

    new WebpackChunkHash(),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
]

module.exports.config = plugins
