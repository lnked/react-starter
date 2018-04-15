'use strict';

// const BrotliPlugin = require('brotli-webpack-plugin');
// const ZopfliPlugin = require('zopfli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
    // new BrotliPlugin({
    //     asset: '[path].br[query]',
    //     test: /\.(js|css|html|svg)$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    })
    // new ZopfliPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "zopfli",
    //     test: /\.(js|css|html|svg)$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
];

module.exports.config = plugins;
