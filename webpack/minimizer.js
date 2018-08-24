const { resolve } = require('path')

const webpack = require('webpack')
const define = require('./define')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: require('os').cpus().length,
            sourceMap: define.rs_sourceMap,
            uglifyOptions: {
                ie8: false,
                mangle: true,
                toplevel: false,
                parse: {
                    html5_comments: false,
                },
                compress: {
                    inline: false,
                    unused: true,
                    booleans: true,
                    warnings: false,
                    dead_code: true,
                    comparisons: false,
                    drop_console: define.rs_release,
                    drop_debugger: define.rs_release,
                    global_defs: {
                        DEBUG: false,
                    },
                },
                output: {
                    ecma: 8,
                    ascii_only: true,
                    comments: false,
                    beautify: false,
                    indent_level: 0,
                },
            },
        }),
        new OptimizeCSSAssetsPlugin(),
    ],
}
