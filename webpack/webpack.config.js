'use strict';

const path = require('path');
const webpack = require('webpack');
const define = require('./define');

const rules = require('./rules');
const plugins = require('./plugins');

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_release ? 'cheap-module-source-map' : 'eval',

    entry: {
        bundle: [define.rs_root, 'app.jsx'].join('/'),
        styles: [define.rs_root, 'app.scss'].join('/')
    },

    output: {
        filename: '[name].[hash].js',
        path: define.rs_dist,
        publicPath: '/'
    },

    resolve: {
        modules: [
            define.rs_root, 'node_modules', 'bower_components', 'components', 'layouts', 'pages', 'utils', 'containers'
        ],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.json', '.scss'],
        descriptionFiles: ['package.json', 'bower.json'],
        mainFiles: ['index', 'app']
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        rules: rules.config
    },

    performance: {
        maxAssetSize: 100000,
        maxEntrypointSize: 300000,
        hints: false
    },

    devServer: {
        contentBase: define.rs_dist,
        watchContentBase: define.rs_develop,
        historyApiFallback: { disableDotRule: true },
        compress: true,
        host: '0.0.0.0',
        port: 7777,
        lazy: true,
        hot: true,
        hotOnly: true,
        public: '0.0.0.0:7777'
    },

    watch: define.rs_develop,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: plugins.config,

    bail: !define.rs_develop,

    cache: define.rs_develop,

    stats: {
        colors: true,
        reasons: define.rs_develop,
        hash: define.rs_release,
        version: define.rs_release,
        timings: true,
        chunks: define.rs_release,
        chunkModules: define.rs_release,
        cached: define.rs_release,
        cachedAssets: define.rs_release,
    }
};
