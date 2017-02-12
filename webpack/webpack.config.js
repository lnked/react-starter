'use strict';

const path = require('path');
const webpack = require('webpack');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_release ? 'cheap-module-source-map' : 'eval-source-map',

    entry: {
        bundle: [define.rs_root, 'app.jsx'].join('/')
    },

    target: 'web', // electron-main | electron-renderer

    output: {
        publicPath: '/',
        path: define.rs_dist,
        filename: '[name].[hash].js',
        crossOriginLoading: "use-credentials"
    },

    resolve: {
        modules: [
            define.rs_root, 'node_modules', 'components', 'layouts', 'pages', 'utils'
        ],
        unsafeCache: true,
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.json', '.scss'],
        descriptionFiles: ['package.json', 'bower.json'],
        mainFiles: ['index', 'app'],
        alias: {
            utils: path.resolve(__dirname, '../app/utils/'),
            pages: path.resolve(__dirname, '../app/pages/'),
            layouts: path.resolve(__dirname, '../app/layouts/'),
            components: path.resolve(__dirname, '../app/components/')
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
        contentBase: define.rs_dist,
        watchContentBase: define.rs_develop,
        historyApiFallback: { disableDotRule: true },
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        compress: true,
        host: '0.0.0.0',
        port: 7777,
        public: '0.0.0.0:7777'
    },

    watch: define.rs_develop,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: plugins.config,

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
