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
        styles: path.resolve(define.rs_root, 'app.scss')
    },

    target: 'web', // electron-main | electron-renderer
    
    output: {
        publicPath: '/',
        path: define.rs_dist,
        filename: define.rs_production ? '[name].[chunkhash:5].js' : '[name].js',
        chunkFilename: define.rs_production ? 'chunk.[name].[chunkhash:5].js' : '[name].chunk.js'
    },

    resolve: {
        modules: [ define.rs_root, 'node_modules' ],
        mainFiles: ['index'],
        unsafeCache: true,
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.jsx', '.js'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            utils: path.resolve(__dirname, '../app/utils'),
            assets: path.resolve(__dirname, '../app/assets'),
            layouts: path.resolve(__dirname, '../app/layouts'),
            reducers: path.resolve(__dirname, '../app/reducers'),
            containers: path.resolve(__dirname, '../app/containers'),
            components: path.resolve(__dirname, '../app/components'),
            images: path.resolve(__dirname, '../app/assets/images'),
            scripts: path.resolve(__dirname, '../app/assets/scripts')
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
        maxAssetSize: 100000,
        maxEntrypointSize: 300000,
        hints: false
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
