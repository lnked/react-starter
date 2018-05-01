'use strict';

// const ZopfliPlugin = require("zopfli-webpack-plugin");
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

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
    }),
    // new ZopfliPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "zopfli",
    //     test: /\.(js|html)$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
];

module.exports.config = plugins;
