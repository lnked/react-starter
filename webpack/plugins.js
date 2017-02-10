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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        __PROD__: define.rs_release,
        __API_HOST__: define.rs_develop ? JSON.stringify('http://0.0.0.0:7777') : define.rs_release ? JSON.stringify('') : JSON.stringify('http://site.dev')
    }),
    new ExtractTextPlugin({
        filename: define.rs_release ? '[name].[hash].css' : '[name].css',
        disable: false,
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        filetype: 'pug',
        minimize: define.rs_release,
        template: 'app.pug',
        filename: 'index.html'
    }),
    new CopyWebpackPlugin([
        { from: 'assets/scripts', to: 'js' },
        { from: 'assets/images', to: 'images' },
        { from: 'assets/favicon/', to: 'favicon' }
    ])
);

if (define.rs_release) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChuncs: 3
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

module.exports.config = plugins;
