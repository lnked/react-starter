'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_production ? false : 'cheap-module-eval-source-map',

    target: 'web', // 'node' | electron-main | electron-renderer

    entry: {
        polyfill: ['babel-polyfill'],
        vendor: [
            'react',
            'react-dom'
            // 'zepto'
        ],
        app: resolve(define.rs_root, 'app.jsx'),
        styles: resolve(define.rs_root, 'app.scss'),
    },

    output: {
        path: define.rs_dist, // rs_deploy_path
        pathinfo: define.rs_development,
        filename: define.rs_production ? '[name].[hash:5].bundle.js' : '[name].js',
        chunkFilename: define.rs_production ? '[name].[hash:5].chunk.js' : '[name].chunk.js'
    },

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
            layouts: resolve(define.rs_root, 'layouts'),
            reducers: resolve(define.rs_root, 'reducers'),
            segments: resolve(define.rs_root, 'segments'),
            settings: resolve(define.rs_root, 'settings'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            svgstore: resolve(define.rs_root, 'assets/svgstore'),
            styles: resolve(define.rs_root, 'assets/styles'),
            scripts: resolve(define.rs_root, 'assets/scripts')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        rules: rules.config
    },

    performance: {
        hints: define.rs_production ? 'warning' : false,
        maxAssetSize: 300000,
        maxEntrypointSize: 400000
    },

    node: {
        module: false,
        process: true,
        setImmediate: false,
        clearImmediate: false
    },

    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        compress: false,
        contentBase: define.rs_dist,
        watchContentBase: define.rs_development,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 1000
        },
        overlay: {
            warnings: true,
            errors: true
        },
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        hot: true,
        // inline: true,
        host: '0.0.0.0'
    },

    watch: define.rs_development,

    plugins: plugins.config,

    stats: {
        colors: true,
        timings: true,
        children: false,
        errorDetails: true,

        modules: false,
        chunks: false,
        chunk: false,
        cached: false,

        exclude: define.rs_development,

        reasons: define.rs_development,
        profile: define.rs_development,
        
        maxModules: define.rs_development,
        chunkModules: define.rs_development,

        hideModules: define.rs_production,
        hash: define.rs_production,
        version: define.rs_production,
        origins: define.rs_production,
        usedExports: define.rs_production,
        entrypoints: define.rs_production,
        cachedAssets: define.rs_production
    }
};
