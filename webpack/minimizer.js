const { resolve } = require('path')

const webpack = require('webpack')
const define = require('./define')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PostCssSafeParser = require('postcss-safe-parser');

const uglifyJsOptions = {
  ie8: false,
  ecma: 5,
  mangle: true,
  toplevel: false,
  warnings: false,
  keep_fnames: false,
  parse: {
    html5_comments: false,
  },
  compress: {
    inline: false,
    sequences: true,
    // properties: true,
    comparisons: true,
    // comparisons: false,
    conditionals: true,
    evaluate: true,
    booleans: true,
    loops: true,
    unused: true,
    unsafe: false,
    warnings: false,
    hoist_funs: true,
    if_return: true,
    join_vars: true,
    // negate_iife: true,
    dead_code: define.rs_release,
    drop_console: define.rs_release,
    drop_debugger: define.rs_release,
    global_defs: {
      DEBUG: false,
    },
  },
  output: {
    ascii_only: true,
    comments: false,
    beautify: false,
    indent_level: 0,
  },
}

module.exports = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      extractComments: 'all',
      sourceMap: define.rs_sourceMap,
      uglifyOptions: uglifyJsOptions,
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        parser: PostCssSafeParser,
        map: {
          // `inline: false` forces the sourcemap to be output into a
          // separate file
          inline: false,
          // `annotation: true` appends the sourceMappingURL to the end of
          // the css file, helping the browser find the sourcemap
          annotation: true,
        }
      },
    }),
  ],
}
