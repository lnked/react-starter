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
            'react-dom',
            'react-router-dom'
        ],
        app: resolve(define.rs_root, 'app.jsx'),
        styles: resolve(define.rs_root, 'app.scss')
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
            config: resolve(define.rs_root, 'config'),
            layouts: resolve(define.rs_root, 'layouts'),
            reducers: resolve(define.rs_root, 'reducers'),
            segments: resolve(define.rs_root, 'segments'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            styles: resolve(define.rs_root, 'assets/styles'),
            svgstore: resolve(define.rs_root, 'assets/svgstore'),
            scripts: resolve(define.rs_root, 'assets/scripts')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        rules: rules.config,
        exprContextCritical: false
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

    // stats: {
    //     colors: true,
    //     timings: true,
    //     children: false,
    //     errorDetails: true,

    //     modules: false,
    //     chunks: false,
    //     chunk: false,
    //     cached: false,

    //     exclude: define.rs_development,

    //     reasons: define.rs_development,
    //     profile: define.rs_development,
        
    //     maxModules: define.rs_development,
    //     chunkModules: define.rs_development,

    //     hideModules: define.rs_production,
    //     hash: define.rs_production,
    //     version: define.rs_production,
    //     origins: define.rs_production,
    //     usedExports: define.rs_production,
    //     entrypoints: define.rs_production,
    // },

    stats: {
        // Add asset Information
        assets: true,
        // Sort assets by a field
        assetsSort: "field",
        // Add information about cached (not built) modules
        cached: false,
        // Show cached assets (setting this to `false` only shows emitted files)
        cachedAssets: define.rs_production,
        // Add children information
        children: false,
        // Add chunk information (setting this to `false` allows for a less verbose output)
        chunks: false,
        // Add built modules information to chunk information
        chunkModules: false,
        // Add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Sort the chunks by a field
        chunksSort: "field",
        // Context directory for request shortening
        context: define.rs_root,
        // `webpack --colors` equivalent
        colors: true,
        // Display the distance from the entry point for each module
        depth: false,
        // Display the entry points with the corresponding bundles
        entrypoints: false,
        // Add errors
        errors: true,
        // Add details to errors (like resolving log)
        errorDetails: true,
        // Exclude modules which match one of the given strings or regular expressions
        exclude: [],
        // Add the hash of the compilation
        hash: false,
        // Set the maximum number of modules to be shown
        maxModules: 0,
        // Add built modules information
        modules: false,
        // Sort the modules by a field
        modulesSort: "field",
        // Show performance hint when file size exceeds `performance.maxAssetSize`
        performance: false,
        // Show the exports of the modules
        providedExports: false,
        // Add public path information
        publicPath: false,
        // Add information about the reasons why modules are included
        reasons: false,
        // Add the source code of modules
        source: false,
        // Add timing information
        timings: true,
        // Show which exports of a module are used
        usedExports: false,
        // Add webpack version information
        version: false,
        // Add warnings
        warnings: true
    }
};
