const { join, resolve } = require('path');
const webpack = require('webpack');

const define = require('./define')
const entryPoint = require('./entry-point')

module.exports = {
    mode: define.rs_mode,

    entry: {
        bundle: entryPoint.config.bundle,
    },

    output: {
        path: resolve(define.rs_dist, 'dll'),
        filename: 'dll.[name].js',
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            context: './',
            name: '[name]',
            path: join(resolve(define.rs_dist, 'dll'), '[name]-manifest.json'),
        }),
    ],

    resolve: {
        modules: ['node_modules'],
    },
};
