'use strict';

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

// const BabiliMinification = new BabiliPlugin();
// const ZopfliCompression = new CompressionPlugin({
//   asset: "[path].gzip[query]",
//   algorithm: "zopfli",
//   test: /\.(js|css)$/
// });
// const BrotliCompression = new BrotliPlugin({
//   asset: '[path].br[query]',
//   test: /\.(js|css)$/,
//   mode: 0,
//   quality: 11
// });

const plugins = [
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    })
];

module.exports.config = plugins;