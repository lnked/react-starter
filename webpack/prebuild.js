'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define = require('./define');

module.exports = {

    context: define.rs_root,

    entry: resolve(define.rs_root, 'svgstore.jsx'),

    output: {
        path: define.rs_root,
        filename: 'cache/[name].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        ...require('./plugins/svgstore').config
    ]
}
