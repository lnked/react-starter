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
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash].css' : '[name].css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        minimize: define.rs_production,
        filetype: 'pug',
        template: 'app.pug',
        filename: 'index.html'
    }),
    new CopyWebpackPlugin([
        { from: 'assets/scripts', to: 'js' },
        { from: 'assets/images', to: 'images' },
        { from: 'assets/favicon/', to: 'favicon' }
    ]),
    new webpack.HotModuleReplacementPlugin()
);

if (define.rs_production) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    );
} else {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    );
}

if (define.rs_production) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChuncs: 3
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                unused          : true,
                dead_code       : true,
                warnings        : false,
                drop_debugger   : true,
                conditionals    : true,
                evaluate        : true,
                drop_console    : true,
                sequences       : true,
                booleans        : true,
                loops           : true,
                unsafe          : true,
                unsafe_comps    : true,
                screw_ie8       : true,
                pure_getters    : true
            },
            output: {
                beautify: false,
                comments: false
            },
            exclude: [/\.min\.js$/gi]
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    );
}

module.exports.config = plugins;
