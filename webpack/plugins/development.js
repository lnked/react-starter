'use strict';

const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const plugins = [
    // make hot reloading work
    new webpack.HotModuleReplacementPlugin(),
    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin(),
    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin(),

    new LiveReloadPlugin(),
    new InterpolateHtmlPlugin({
        PUBLIC_URL: '/'
    })
];

module.exports.config = plugins;