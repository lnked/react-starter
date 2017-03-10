'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    
    context: define.rs_root,

    // devtool: define.rs_production ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    devtool: define.rs_production ? false : 'cheap-module-eval-source-map',

    entry: {
        app: resolve(define.rs_root, 'app.jsx'),
        styles: resolve(define.rs_root, 'app.scss'),
        polyfill: ['babel-polyfill'],
        vendor: ['react', 'react-dom', 'react-router', 'react-webstorage']
        // vendor: Object.keys(require(resolve(define.rs_root, '../package.json')).dependencies)
    },

    target: 'web', // 'node' | electron-main | electron-renderer

    output: {
        publicPath: '/',
        path: define.rs_dist,
        // libraryTarget: 'CommonJS',
        pathinfo: define.rs_development,
        filename: define.rs_production ? '[name].[hash:5].bundle.js' : '[name].js',
        chunkFilename: define.rs_production ? '[name].[hash:5].chunk.js' : '[name].chunk.js'
    },

    // externals: [nodeExternals({
    //     // whitelist: ['react', 'react-router', 'react-dom', 'react-webstorage']
    //     whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
    // })],

    resolve: {
        modules: [define.rs_root, 'node_modules'],
        mainFiles: ['index'],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.json', '.scss'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            utils: resolve(define.rs_root, 'utils'),
            assets: resolve(define.rs_root, 'assets'),
            config: resolve(define.rs_root, 'config'),
            layouts: resolve(define.rs_root, 'layouts'),
            reducers: resolve(define.rs_root, 'reducers'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            scripts: resolve(define.rs_root, 'assets/scripts')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        noParse: /jquery|lodash/,
        rules: rules.config
    },

    performance: {
        hints: define.rs_production ? "warning" : false,
        maxAssetSize: 300000,
        maxEntrypointSize: 400000
    },

    devServer: {
        compress: false,
        contentBase: define.rs_dist,
        watchContentBase: define.rs_development,
        historyApiFallback: { disableDotRule: true },
        inline: true,
        hot: true,
        host: '0.0.0.0'
    },

    watch: define.rs_development,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: plugins.config,

    stats: {
        colors: true,
        timings: true,
        children: false,
        errorDetails: true,
        modules: false,
        displayModules: false,
        hideModules: true,
        chunkModules: false,
        displayExclude: false,
        displayReasons: false,
        reasons: false,
        chunks: false,
        exclude: false,
        maxModules: false,

        chunk: define.rs_production,
        hash: define.rs_production,
        version: define.rs_production,
        cached: define.rs_production,
        origins: define.rs_production,
        usedExports: define.rs_production,
        entrypoints: define.rs_production,
        cachedAssets: define.rs_production
    }
};
