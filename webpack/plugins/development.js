'use strict';

const define = require('../define');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const plugins = [
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/,
        define.rs_node
    ]),

    new WebpackNotifierPlugin({ alwaysNotify: true }),

    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin(),

    // make hot reloading work
    new webpack.HotModuleReplacementPlugin(),

    new CaseSensitivePathsPlugin(),

    // new WatchMissingNodeModulesPlugin(define.rs_node),

    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

module.exports.config = plugins;
