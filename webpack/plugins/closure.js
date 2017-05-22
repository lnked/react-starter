'use strict';

const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
// const ClosureCompilerPlugin = require('google-closure-compiler-js').webpack;

// https://github.com/google/closure-compiler-js

const plugins = [
    new ClosureCompilerPlugin({
        // options: {
        //     languageIn: 'ECMASCRIPT6',
        //     languageOut: 'ECMASCRIPT5',
        //     compilationLevel: 'ADVANCED',
        //     warningLevel: 'VERBOSE'
        // }
        jsCompiler: true,
        compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'ADVANCED'
        },
        concurrency: 3
    })
];

module.exports.config = plugins;