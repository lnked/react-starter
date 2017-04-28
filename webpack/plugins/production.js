'use strict';

const webpack = require('webpack');

const plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[hash:5].js',
        minChunks: Infinity
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: "runtime",
    //     minChunks: Infinity
    // }),
];

module.exports.config = plugins;