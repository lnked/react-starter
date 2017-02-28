'use strict';

const path = require('path');
const webpack = require('webpack');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_production ? false : 'eval-source-map',

    entry: {
        app: path.resolve(define.rs_root, 'app.jsx'),
        styles: path.resolve(define.rs_root, 'app.scss'),
        polyfill: ['babel-polyfill'],
        vendor: ['react', 'react-dom', 'react-router'] // , 'redux', 'react-router-redux'
        // vendor: Object.keys(require('../package.json').dependencies)
    },

    target: 'web', // 'node' | electron-main | electron-renderer

    output: {
        publicPath: '/',
        path: define.rs_dist,
        pathinfo: define.rs_development,
        filename: define.rs_production ? '[name].[hash:5].bundle.js' : '[name].js',
        chunkFilename: define.rs_production ? '[name].[hash:5].chunk.js' : '[name].chunk.js'
    },

    resolve: {
        modules: [ 'node_modules', define.rs_root ],
        mainFiles: ['index'],
        unsafeCache: true,
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.json', '.scss'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            utils: path.resolve(define.rs_root, 'utils'),
            assets: path.resolve(define.rs_root, 'assets'),
            layouts: path.resolve(define.rs_root, 'layouts'),
            reducers: path.resolve(define.rs_root, 'reducers'),
            containers: path.resolve(define.rs_root, 'containers'),
            components: path.resolve(define.rs_root, 'components'),
            images: path.resolve(define.rs_root, 'assets/images'),
            scripts: path.resolve(define.rs_root, 'assets/scripts')
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
        maxAssetSize: 200000,
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
        chunk: define.rs_production,
        modules: define.rs_production,
        reasons: define.rs_development,
        hash: define.rs_production,
        version: define.rs_production,
        chunks: define.rs_production,
        chunkModules: define.rs_production,
        cached: define.rs_production,
        origins: define.rs_production,
        usedExports: define.rs_production,
        hideModules: define.rs_production,
        entrypoints: define.rs_production,
        cachedAssets: define.rs_production
    }
};
