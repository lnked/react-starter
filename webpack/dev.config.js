'use strict';

const { resolve, dirname } = require('path');

// .serverc
// const serve = require('webpack-serve');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');
const proxy = require('./proxy');

const stats = require('./stats');
const define = require('./define');

const webpackConfig = webpackMerge(defaultConfig, {
    mode: define.rs_environment,

    devtool: 'cheap-module-source-map',

    watch: true,

    cache: true,

    optimization: {},

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    devServer: {
        hot: true,
        open: true,
        quiet: false,
        noInfo: true,
        inline: true,
        hotOnly: false,
        contentBase: define.rs_contentBase,
        overlay: {
            errors: true,
            warnings: true
        },
        compress: true,
        progress: false,
        watchContentBase: false,
        disableHostCheck: true,
        historyApiFallback: {
            disableDotRule: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        stats: stats.config,
        port: define.rs_port,
        host: define.rs_host,
        // proxy: proxy.config,
    }
});

module.exports = webpackConfig;
