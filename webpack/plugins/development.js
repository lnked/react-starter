'use strict';

const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const plugins = [
    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin(),

    new InterpolateHtmlPlugin({
        PUBLIC_URL: '/'
    }),

    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin(),

    // make hot reloading work
    new webpack.HotModuleReplacementPlugin()
];

module.exports.config = plugins;
