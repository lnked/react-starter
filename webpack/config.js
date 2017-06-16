'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const stats = require('./stats');
const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// const entryPoint = []
// app: [
//     // activate HMR for React
//     'react-hot-loader/patch',

//     // bundle the client for webpack-dev-server
//     // and connect to the provided endpoint
//     `webpack-dev-server/client?http://${host}:${port}`,

//     // bundle the client for hot reloading
//     // only- means to only hot reload for successful updates
//     'webpack/hot/only-dev-server',

//     // the entry point of our app
//     resolve(define.rs_root, 'app.jsx')
// ]

module.exports = {
    
    context: define.rs_root,

    devtool: define.rs_development ? 'cheap-module-eval-source-map' : false,

    target: 'web', // 'web' | 'node' | electron-main | electron-renderer

    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom'
        ],
        app: resolve(define.rs_root, 'app.jsx')
    },

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
        rules: rules.config
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
            poll: 1000
        },
        overlay: {
            warnings: true,
            errors: true
        },
        stats: stats.config,
        hot: define.rs_development,
        host: '0.0.0.0'
    },

    watch: define.rs_development,

    plugins: plugins.config,
    
    bail: define.rs_production,

    cache: define.rs_development  
};
