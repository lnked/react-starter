'use strict';

const webpack = require('webpack');
const define  = require('../define');
const helpers = require('../helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const plugins = [
    new webpack.ProvidePlugin({
        $: "zepto"
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /(en-gb|ru)\.js/
    ),
    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.BROWSER': JSON.stringify(true),
        'process.env.DEBUG': JSON.stringify(false)
    }),
    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app')),
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new ScriptExtHtmlWebpackPlugin({
        async: /\.js$/,
        preload: {
            test: /\.js$/,
            chunks: 'defer'
        }
    }),
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images' }
    ])
];

module.exports.config = plugins;