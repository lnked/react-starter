'use strict';

const { resolve, dirname } = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');

const stats = require('./stats');
const define = require('./define');

module.exports = webpackMerge(defaultConfig, {
    mode: define.rs_environment,

    devtool: 'cheap-module-inline-source-map',

    watch: define.rs_development,

    cache: define.rs_development,

    optimization: {},

    devServer: {
        hot: true,
        open: true,
        inline: true,
        overlay: {
            errors: true,
            warnings: true
        },
        compress: false,
        contentBase: define.rs_contentBase,
        watchContentBase: true,
        disableHostCheck: true,
        historyApiFallback: {
            disableDotRule: true
        },
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300
        },
        stats: stats.config,
        port: define.rs_port,
        host: define.rs_host
    }
});
