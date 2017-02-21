'use strict';

const plugins = [];

const webpack = require('webpack');
const define = require('./define');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        cutCode: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify(define.rs_production ? 'production' : 'development')
    }),
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new HtmlWebpackPlugin({
        minimize: define.rs_production,
        filetype: 'pug',
        template: 'app.pug',
        filename: 'index.html'
    }),
    new CopyWebpackPlugin([
        { from: 'assets/scripts', to: 'js' },
        { from: 'assets/styles/', to: 'css' },
        { from: 'assets/images', to: 'images' }
    ]),
    new webpack.HotModuleReplacementPlugin()
);

if (define.rs_production) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChuncs: 2
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            compress: {
                warnings: false,
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
                // drop_console: true,
                // side_effects: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
                unsafe_comps    : true,
                screw_ie8       : true,
                pure_getters    : true
            },
            mangle: {
                toplevel: true,
                sort: true,
                eval: true,
                properties: true
            },
            output: {
                comments: false,
                beautify: false,
                space_colon: false
            },
            exclude: [/\.min\.js$/gi]
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

module.exports.config = plugins;
