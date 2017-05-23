'use strict';

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|svg|html)$/,
        threshold: 10240,
        minRatio: 0.8
    })
];

module.exports.config = plugins;