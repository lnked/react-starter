'use strict';

const { resolve, dirname } = require('path');

const ignoredFiles = require('react-dev-utils/ignoredFiles');

// .serverc
// const serve = require('webpack-serve');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('./config');
const proxy = require('./proxy');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const stats = require('./stats');
const define = require('./define');

const webpackConfig = webpackMerge(config, {
    mode: define.rs_environment,

    devtool: 'cheap-module-eval-source-map',

    watch: true,

    output: {
        ...config.output,
        pathinfo: true,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        devtoolModuleFilenameTemplate: info =>
            resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },

    resolve: {
        ...config.resolve,
        plugins: [
            new ModuleScopePlugin(define.rs_root, [define.packageJson])
        ]
    },

    cache: true,

    optimization: {},

    devServer: {
        hot: true,

        open: true,

        contentBase: define.rs_contentBase,

        compress: true,

        // noInfo: true,
        // inline: true,
        // hotOnly: false,
        // progress: false,

        watchContentBase: false,

        disableHostCheck: true,

        clientLogLevel: 'none',

        publicPath: config.output.publicPath,

        quiet: true,

        watchOptions: {
            ignored: ignoredFiles(define.rs_root)
        },

        overlay: {
            errors: true,
            warnings: true
        },

        historyApiFallback: {
            disableDotRule: true,
        },

        https: define.rs_protocol === 'https',

        port: define.rs_port,

        host: define.rs_host,

        public: `${define.rs_protocol}://${define.rs_host}:${define.rs_port}`,

        stats: stats.config,

        // proxy: proxy.config,
    },

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
});

module.exports = webpackConfig;
