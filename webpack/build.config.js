const { resolve, relative } = require('path')

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const config = require('./config')

const stats = require('./stats')
const define = require('./define')

const optimization = require('./optimization')
const minimizer = require('./minimizer')

module.exports = webpackMerge(config, {
    mode: 'production',

    devtool: false,

    bail: false,

    stats: stats.config,

    output: {
        ...config.output,
        path: resolve(define.rs_dist, 'assets'),
        filename: 'js/[name].[chunkhash:7].js',
        chunkFilename: 'js/[name].[chunkhash:7].min.js',
        devtoolModuleFilenameTemplate: info => relative(define.rs_root, info.absoluteResourcePath).replace(/\\/g, '/'),
    },

    performance: define.rs_release && {
        hints: 'warning',
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
        assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },

    optimization: webpackMerge(optimization, minimizer),

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
})
