'use strict';

const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

const plugins = [
    new ClosureCompilerPlugin({
        // compilation_level: 'ADVANCED',
        // create_source_map: false
        compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'ADVANCED'
        },
        concurrency: 3
    })
];

module.exports.config = plugins;