'use strict';

const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const plugins = [
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/
    ]),

    new WebpackNotifierPlugin({ alwaysNotify: true }),

    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin(),

    // make hot reloading work
    new webpack.HotModuleReplacementPlugin(),

    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin()
];

module.exports.config = plugins;
