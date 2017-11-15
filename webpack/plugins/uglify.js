'use strict';

const webpack = require('webpack');
const define  = require('../define');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new UglifyJSPlugin({
        parallel: true,
        sourceMap: define.rs_analyzer,
        uglifyOptions: {
            minimize: true,
            beautify: false,
            compress: {
                warnings: false,
                side_effects: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
                unsafe_comps: true,
                pure_getters: true,
                drop_console: define.rs_release
            },
            mangle: {
                eval: true,
                toplevel: true,
                properties: true
            },
            output: {
                comments: false
            }
        },
        exclude: [/\.min\.js$/gi]
    })
];

module.exports.config = plugins;
