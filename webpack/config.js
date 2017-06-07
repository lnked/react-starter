'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

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
        filename: define.rs_production ? 'js/[name].[chunkhash:5].bundle.js' : '[name].js',
        chunkFilename: define.rs_production ? 'js/[name].[chunkhash:5].chunk.js' : '[name].chunk.js',
        jsonpFunction: 'WJ',
        hotUpdateFunction: 'UF'
    },

    resolve: {
        symlinks: true,
        modules: [define.rs_root, 'node_modules'],
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

    performance: {
        hints: define.rs_production ? 'warning' : false,
        maxAssetSize: 300000,
        maxEntrypointSize: 400000,
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
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
        host: '0.0.0.0'
    },

    watch: define.rs_development,

    plugins: plugins.config,
    
    bail: define.rs_production,

    cache: define.rs_development,

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    stats: {
        optimizationBailout: true,
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
        reasons: define.rs_development,
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
