'use strict';

const { resolve } = require('path');

const webpack = require('webpack');

const alias = require('./alias');
const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const entryPoint = require('./entry-point');

// process.noDeprecation = true;
// process.traceDeprecation = true;

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
                    ? 'js/[name].[chunkhash:3].js'
                    : '[name].js',
        chunkFilename: define.rs_production
                    ? 'js/[name].[chunkhash:3].c.js'
                    : '[name].c.js',
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
        alias: alias.config
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        unsafeCache: define.rs_development,
        wrappedContextCritical: true,
        strictExportPresence: true,

        rules: rules.config,
        noParse: [
            /[\/\\]react[\/\\]react\.js[\/\\]jquery[\/\\]zepto\.js$/
        ]
    },

    plugins: plugins.config,

    node: false
};
