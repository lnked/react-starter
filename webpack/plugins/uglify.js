'use strict';

const webpack = require('webpack');

const plugins = [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compress: {
            warnings: false,
            drop_console: false,
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
            screw_ie8: true,
            pure_getters: true
        },
        mangle: {
            sort: true,
            eval: true,
            toplevel: true,
            properties: true
        },
        output: {
            comments: false,
            beautify: false,
            space_colon: false
        },
        exclude: [/\.min\.js$/gi]
    })
];

module.exports.config = plugins;