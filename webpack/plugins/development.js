'use strict';

const LiveReloadPlugin = require('webpack-livereload-plugin');

const plugins = [
    new LiveReloadPlugin()
];

module.exports.config = plugins;