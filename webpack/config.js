'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');
const nodeExternals = require('webpack-node-externals');

process.traceDeprecation = true;

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_production ? false : 'cheap-module-eval-source-map',

    target: 'web', // 'node' | electron-main | electron-renderer

    entry: {
        app: resolve(define.rs_root, 'app.jsx'),
        styles: resolve(define.rs_root, 'app.scss'),
        vendor: [
          'react',
          'react-dom',
          'react-router-dom'
        ]
        // vendor: [
        //     'axios',
        //     'react',
        //     'react-dom',
        //     'immutable',
        //     'react-router-dom'
        // ],
        // polyfill: ['babel-polyfill']
        // vendor: Object.keys(require(resolve(define.rs_root, '../package.json')).dependencies)
    },

    output: {
        path: resolve(define.rs_dist, 'static'),
        publicPath: '/static/',
        pathinfo: define.rs_development,
        filename: define.rs_production ? '[name].[hash:5].bundle.js' : '[name].js',
        chunkFilename: define.rs_production ? '[name].[hash:5].chunk.js' : '[name].chunk.js'
    },

    // externals: {
    //     axios: 'axios',
    //     react: 'react',
    //     'react-dom': 'react-dom',
    //     'react-router': 'react-router',
    //     'react-webstorage': 'react-webstorage'
    // },

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
        // noParse: /(react\/react\.js|react\-dom\/dist\/react-dom\.js)/,
        // noParse: /(react\-dom\/dist\/react-dom\.js)/,
        // noParse: /jquery|axios|react|react-dom|immutable|react-router|react-webstorage|lodash/,
        rules: rules.config
    },

    performance: {
        hints: define.rs_production ? "warning" : false,
        maxAssetSize: 300000,
        maxEntrypointSize: 400000
    },

    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'https://other-server.example.com',
        //         secure: false
        //     }
        // },
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

        chunks: define.rs_development,
        exclude: define.rs_development,

        reasons: define.rs_development,
        profile: define.rs_development,
        modules: define.rs_development,
        
        maxModules: define.rs_development,
        chunkModules: define.rs_development,

        hideModules: define.rs_production,
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
