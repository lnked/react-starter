'use strict';

const { resolve, dirname } = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');
const proxy = require('./proxy');

const stats = require('./stats');
const define = require('./define');

module.exports = webpackMerge(defaultConfig, {
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
        inline: true,
        overlay: {
            errors: true,
            warnings: true
        },
        proxy: proxy.config,
        progress: false,
        compress: true,
        contentBase: define.rs_contentBase,
        watchContentBase: true,
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
        host: define.rs_host
    }
});
