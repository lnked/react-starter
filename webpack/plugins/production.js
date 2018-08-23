'use strict'

const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const define = require('../define')

const Critters = require('critters-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default
// const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const ReplacePlugin = require('replace-bundle-webpack-plugin')

const os = require('os')
const UglifyJsParallelPlugin = require('webpack-uglify-parallel')

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: '../webpack-manifest.json',
    }),

    // new webpack.IgnorePlugin(/react-hot-loader$/),

    new UglifyJsParallelPlugin({
        workers: os.cpus().length, // usually having as many workers as cpu cores gives good results
        // other uglify options
    }),

    new Critters({
        fonts: false,
        external: false,
        preload: 'js-lazy',
        preloadFonts: true,
    }),

    new ReplacePlugin([
        {
            partten: /\/Users\/lnked\/web\/[\w\-\d\.\s]+\/(src\/)?[\w\d\-\/\.\<\>\s]+/gi,
            replacement: () => {
                return ''
            },
        },
    ]),

    // new HtmlCriticalWebpackPlugin({
    //     base: define.rs_dist,
    //     src: 'index.html',
    //     dest: 'index.html',
    //     inline: true,
    //     minify: true,
    //     extract: true,
    //     width: 375,
    //     height: 565,
    //     penthouse: {
    //         blockJSRequests: false
    //     }
    // }),

    // new PrepackWebpackPlugin({
    //     sourceMaps: define.rs_sourceMap,
    //     inlineExpressions: true
    // }),

    new webpack.HashedModuleIdsPlugin(),

    new WebpackChunkHash(),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
]

module.exports.config = plugins
