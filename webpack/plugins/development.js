'use strict';

const define = require('../define');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const plugins = [
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/,
        /node_modules/
    ]),

    new WebpackNotifierPlugin({ alwaysNotify: true }),

    new CaseSensitivePathsPlugin(),

    // make hot reloading work
    new webpack.HotModuleReplacementPlugin(),

    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin(),

    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

module.exports.config = plugins;
