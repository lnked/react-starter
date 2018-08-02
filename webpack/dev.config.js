'use strict';

const { resolve, dirname } = require('path');

// .serverc
// const serve = require('webpack-serve');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('./config');
const proxy = require('./proxy');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const stats = require('./stats');
const define = require('./define');

const ignoredFiles = require('react-dev-utils/ignoredFiles');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');

const webpackConfig = webpackMerge(config, {
    mode: 'development',

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

        watchContentBase: true,

        disableHostCheck: true,

        clientLogLevel: 'none',

        publicPath: config.output.publicPath,

        quiet: false,

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

        before(app) {
            // This lets us open files from the runtime error overlay.
            app.use(errorOverlayMiddleware());
            // This service worker file is effectively a 'no-op' that will reset any
            // previous service worker registered for the same host:port combination.
            // We do this in development to avoid hitting the production cache if
            // it used the same host and port.
            // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
            app.use(noopServiceWorkerMiddleware());
        }
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
