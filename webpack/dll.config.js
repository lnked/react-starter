const { join, resolve } = require('path');

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const config = require('./config')

const stats = require('./stats')
const define = require('./define')
const entryPoint = require('./entry-point')

const optimization = require('./optimization')
const minimizer = require('./minimizer')

module.exports = webpackMerge(config, {
    mode: define.rs_mode,

    devtool: false,

    bail: false,

    stats: stats.config,

    entry: {
        bundle: entryPoint.config.bundle,
    },

    output: {
        ...config.output,
        path: resolve(define.rs_dist, 'dll'),
        filename: 'dll.[name].js',
        library: '[name]',
        devtoolModuleFilenameTemplate: info => relative(define.rs_root, info.absoluteResourcePath).replace(/\\/g, '/'),
    },

    optimization: webpackMerge(optimization, minimizer),

    plugins: [
        ...config.plugins,
        new webpack.DllPlugin({
            // context: './',
            context: __dirname,
            name: '[name]',
            path: join(resolve(define.rs_dist, 'dll'), '[name]-manifest.json'),
        }),
    ],
})

// conf.entry = {
//     bundle: entryPoint.config.bundle,
// };

// module.exports = conf;
