const define = require('../define')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')

const minimizeCssOptions = {
  discardComments: { removeAll: true },
}

const styleLoader = [
  {
    loader: 'style-loader',
    options: {
      hmr: define.rs_development,
    },
  },
]

const miniCssLoader = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: './',
    },
  },
]

const cssConfig = []
const preConfig = []
const usesConfig = []

cssConfig.push({
  loader: 'css-loader',
  options: {
    importLoaders: 2,
    modules: true,
    camelCase: true,
    sourceMap: define.rs_sourceMap,
    minimize: define.rs_production,
    localIdentName: define.rs_development ? '[path][name]__[local]--[hash:base64:5]' : '[sha1:hash:hex:6]',
  },
})

usesConfig.push({
  loader: 'typed-css-modules-loader',
  options: {
    sourceMap: define.rs_sourceMap,
    silent: true,
    modules: true,
    camelCase: true,
    namedExport: true,
  },
})

usesConfig.push({
  loader: 'postcss-loader',
  options: {
    sourceMap: define.rs_sourceMap,
    config: {
      path: resolve(__dirname, '../postcss.config.js'),
    },
  },
})

usesConfig.push({
  loader: 'sass-loader',
  options: {
    expanded: true,
    sourceMap: define.rs_sourceMap,
    sourceMapContents: define.rs_sourceMap,
    includePaths: [define.rs_root],
  },
})

const rules = define.rs_generate_css
  ? [
    ...preConfig,
    {
      test: define.rs_regexp_styles,
      use: [...miniCssLoader, ...cssConfig, ...usesConfig],
      include: [define.rs_node, define.rs_root],
    },
    {
      test: /\.cs{2}$/,
      use: [...miniCssLoader, ...cssConfig],
    },
  ]
  : [
    ...preConfig,
    {
      test: define.rs_regexp_styles,
      use: [...styleLoader, ...cssConfig, ...usesConfig],
      include: [define.rs_node, define.rs_root],
    },
    {
      test: /\.(cs{2})$/,
      use: [...styleLoader, ...cssConfig],
    },
  ]

module.exports.config = [
  ...rules,
]
