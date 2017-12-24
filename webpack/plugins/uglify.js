'use strict';

const webpack = require('webpack');
const define  = require('../define');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: define.rs_analyzer,
        uglifyOptions: {
            ecma: 8,
            ie8: false,
            mangle: true,
            parse: {
                html5_comments: false
            },
            compress: {
                cascade: true,
                booleans: true,
                warnings: false,
                drop_console: define.rs_release,
                drop_debugger: define.rs_release,
                global_defs: {
                    DEBUG: false
                }
            },
            output: {
                comments: false,
                beautify: false,
                indent_level: 0
            },
            warnings: false
        },
        exclude: [/\.min\.js$/gi]
    })
];

module.exports.config = plugins;
