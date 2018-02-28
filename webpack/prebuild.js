'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define = require('./define');

module.exports = {

    context: define.rs_root,

    entry: resolve(define.rs_root, 'svgstore.jsx'),

    output: {
        path: define.rs_root,
        filename: '../.cache/svgstore/[name].js'
    },

    plugins: require('./plugins/prebuild').config,

    stats: require('./stats').config

}
