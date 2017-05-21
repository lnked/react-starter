'use strict';

const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new LiveReloadPlugin(),
    new InterpolateHtmlPlugin({
        PUBLIC_URL: '/'
    })
];

module.exports.config = plugins;