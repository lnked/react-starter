'use strict';

const webpack = require('webpack');
const define  = require('../define');
const helpers = require('../helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const plugins = [
    new webpack.ProvidePlugin({
        $: "zepto"
    }),

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
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            BROWSER: JSON.stringify(true),
            DEBUG: JSON.stringify(false)
        }
    }),
    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app')),
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash:5].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        defaultAttribute: 'async'
    }),
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images' }
        // { from: `./fav/manifest.json`, to: 'manifest.json' }
    ])
];

module.exports.config = plugins;