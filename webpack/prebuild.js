const { join, resolve } = require('path')

const webpack = require('webpack')
const define = require('./define')

module.exports = {
    mode: 'production',

    context: define.rs_root,

    entry: resolve(define.rs_root, 'svgstore.jsx'),

    output: {
        path: define.rs_root,
        filename: join(define.rs_cachePath, '/svgstore/[name].js'),
    },

    plugins: require('./plugins/prebuild').config,

    stats: require('./stats').config,
}
