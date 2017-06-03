'use strict';

const webpack = require('webpack');
const define  = require('../define');
const helpers = require('../helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    // new webpack.ProvidePlugin({
    //     $: "jQuery"
    //     "jQuery": "jQuery"
    // })
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
    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'vendor')),
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images', copyUnmodified: true },
        { from: 'assets/misc/robots.txt', copyUnmodified: true },
        { from: 'assets/misc/.htaccess', copyUnmodified: true }
    ])
];

module.exports.config = plugins;