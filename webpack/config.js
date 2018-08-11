'use strict';

const { resolve } = require('path');

const webpack = require('webpack');

const aliases = require('./aliases');
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
        publicPath: define.rs_output_path,
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
        alias: aliases.config
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        unsafeCache: false,
        wrappedContextCritical: true,
        strictExportPresence: true,
        exprContextCritical: false,

        rules: rules.config,
        noParse: [
            /[\/\\]react[\/\\]react\.js[\/\\]jquery[\/\\]zepto\.js$/
        ]
    },

    plugins: plugins.config,

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
