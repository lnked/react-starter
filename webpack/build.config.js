'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');

const stats = require('./stats');
const define = require('./define');

module.exports = webpackMerge(defaultConfig, {
    mode: define.rs_environment,

    devtool: 'source-map',

    bail: define.rs_production,

    stats: stats.config,

    performance: define.rs_release && {
        hints: 'warning',
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
    },

    node: false
});
