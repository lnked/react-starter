'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./config');

const stats = require('./stats');
const define = require('./define');

const optimization = require('./optimization');
const minimizer = require('./minimizer');

module.exports = webpackMerge(defaultConfig, {
    mode: define.rs_environment,

    devtool: define.rs_release ? false : 'source-map',

    bail: true,

    stats: stats.config,

    performance: define.rs_release && {
        hints: 'errors',
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
    },

    optimization: webpackMerge(optimization, minimizer)
});
