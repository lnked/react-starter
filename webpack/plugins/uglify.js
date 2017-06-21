'use strict';

const webpack = require('webpack');
const define  = require('../define');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new UglifyJSPlugin({
        minimize: true,
        sourceMap: false,
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
            screw_ie8: true,
            pure_getters: true,
            drop_console: define.rs_release
        },
        mangle: {
            sort: true,
            eval: true,
            props: false,
            toplevel: true,
            properties: true
        },
        output: {
            comments: false,
            space_colon: false
        },
        exclude: [/\.min\.js$/gi]
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
];

module.exports.config = plugins;