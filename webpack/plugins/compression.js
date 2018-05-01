'use strict';

const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
    new BrotliGzipPlugin({
        asset: '[path].br[query]',
        algorithm: 'brotli',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new BrotliGzipPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    })
    // new CompressionPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: /\.(js|css|html|svg)$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
];

module.exports.config = plugins;
