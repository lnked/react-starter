'use strict';

const LiveReloadPlugin = require('webpack-livereload-plugin');

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const plugins = [
    new LiveReloadPlugin(),
    new InterpolateHtmlPlugin({
        PUBLIC_URL: '/'
    })
];

module.exports.config = plugins;