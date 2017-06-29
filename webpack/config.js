'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const stats = require('./stats');
const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const entryPoint = require('./entry-point');

module.exports = {

    context: define.rs_root,

    devtool: define.rs_development ? 'source-map' : false,

    target: 'web', // 'web' | 'node' | electron-main | electron-renderer

    entry: entryPoint.config,

    output: {
        path: define.rs_dist,
        pathinfo: define.rs_development,
        publicPath: define.rs_output_path,
        filename: define.rs_production ? 'js/[name].[chunkhash:5].js' : '[name].js',
        chunkFilename: define.rs_production ? 'js/[name].[chunkhash:5].chunk.js' : '[name].chunk.js',
        jsonpFunction: 'WJ',
        hotUpdateFunction: 'UF'
    },

    resolve: {
        symlinks: true,
        modules: [resolve(__dirname, '../node_modules'), define.rs_root],
        mainFiles: ['index'],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.json', '.scss'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            hoc: resolve(define.rs_root, 'hoc'),
            utils: resolve(define.rs_root, 'utils'),
            assets: resolve(define.rs_root, 'assets'),
            config: resolve(define.rs_root, 'config'),
            layouts: resolve(define.rs_root, 'layouts'),
            segments: resolve(define.rs_root, 'segments'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            styles: resolve(define.rs_root, 'assets/styles'),
            scripts: resolve(define.rs_root, 'assets/scripts'),
            svgstore: resolve(define.rs_root, 'assets/svgstore'),
            store: resolve(define.rs_root, 'redux/store'),
            actions: resolve(define.rs_root, 'redux/actions'),
            reducers: resolve(define.rs_root, 'redux/reducers')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        rules: rules.config,
        noParse: /jquery/
    },

    performance: define.rs_production && {
        hints: 'warning',
        maxAssetSize: 300000,
        maxEntrypointSize: 400000,
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
    },

    stats: stats.config,

    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        compress: define.rs_production,
        contentBase: define.rs_dist,
        watchContentBase: define.rs_development,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300
        },
        overlay: {
            warnings: true,
            errors: true
        },
        stats: stats.config,
        hotOnly: define.rs_development,
        port: port,
        host: host
    },

    watch: define.rs_development,

    plugins: plugins.config,
    
    bail: define.rs_production,

    cache: define.rs_development,

    node: {
        dns: "mock",
        fs: "empty",
        path: true,
        url: false,
        global: true,
        process: true,
        Buffer: true,
        console: false,
        __filename: "mock",
        __dirname: "mock",
        setImmediate: true
    }
};
