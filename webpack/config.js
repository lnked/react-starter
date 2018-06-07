'use strict';

const { resolve } = require('path');

const webpack = require('webpack');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const entryPoint = require('./entry-point');

// process.traceDeprecation = true;

process.noDeprecation = true;

module.exports = {

    context: define.rs_root,

    target: define.rs_target,

    entry: entryPoint.config,

    output: {
        path: define.rs_development
            ? resolve(define.rs_dist)
            : resolve(define.rs_dist, 'assets'),
        pathinfo: define.rs_development,
        publicPath: define.rs_output_path,
        filename: define.rs_production
                    ? 'js/[name].[chunkhash:5].js'
                    : '[name].js',
        chunkFilename: define.rs_production
                    ? 'js/[name].[chunkhash:5].chunk.js'
                    : '[name].chunk.js',
        jsonpFunction: 'WJ',
        hotUpdateFunction: 'UF'
    },

    resolve: {
        symlinks: true,
        modules: ['node_modules', define.rs_root],
        mainFiles: ['index'],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs', '.scss', '.css', '.json'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            src: define.rs_root,
            hocs: resolve(define.rs_root, 'hocs'),
            utils: resolve(define.rs_root, 'utils'),
            state: resolve(define.rs_root, 'state'),
            typings: resolve(define.rs_root, 'typings'),
            assets: resolve(define.rs_root, 'assets'),
            config: resolve(define.rs_root, 'config'),
            helpers: resolve(define.rs_root, 'helpers'),
            layouts: resolve(define.rs_root, 'layouts'),
            segments: resolve(define.rs_root, 'segments'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            styles: resolve(define.rs_root, 'assets/styles'),
            scripts: resolve(define.rs_root, 'assets/scripts'),
            svgstore: resolve(define.rs_root, 'assets/svgstore')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        unsafeCache: define.rs_development,
        strictExportPresence: true,

        rules: rules.config,
        noParse: [
            /[\/\\]react[\/\\]react\.js[\/\\]jquery[\/\\]zepto\.js$/
        ]
    },

    plugins: plugins.config,

    node: false
};
