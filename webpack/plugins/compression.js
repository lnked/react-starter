'use strict';

const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
    new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip', // zopfli
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    })
];

module.exports.config = plugins;
