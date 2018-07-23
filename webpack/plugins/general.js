'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define = require('../define');
const helpers = require('../helpers');
const scripts = require('../rules/scripts')
const environment = require('../environment').config;
const formatter = require('../environment').formatter;

const HappyPack = require('happypack');
const SvgStore = require('webpack-svgstore-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');

// const layouts = {};

// glob.sync(`${basePath}/src/layouts/*.?(pug|jade)`).forEach((item) => {
//     layouts.plugins.push(
//         new HtmlWebpackPlugin(helpers.generateConfig(item, 'app', 'bundle'))
//     );
// });

const plugins = [
    new ProgressBarPlugin(),

    new webpack.DefinePlugin({
        'process.env': Object.assign(formatter(environment, true), {
            'BROWSER': true,
            // 'NODE_ENV': JSON.stringify(define.rs_mode),
            // 'BABEL_ENV': JSON.stringify(define.rs_mode)
        }),
        'process.env.NODE_ENV': JSON.stringify(define.rs_mode),
        'process.env.BABEL_ENV': JSON.stringify(define.rs_mode),
        '__DEV__': define.rs_development,
        '__PROD__': define.rs_production
    }),

    // new HappyPack({
    //     loaders: scripts.loaders,
    //     threads: 4,
    //     verbose: false
    // }),

    // new webpack.DllPlugin({
    //     context: __dirname,
    //     name: '[name]_[hash]',
    //     path: resolve(define.rs_dist, 'manifest.json'),
    // }),

    // /(en-gb|en|ru)/
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),

    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production,
        options: {}
    }),

    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'bundle')),

    new CssUrlRelativePlugin({
        importLoaders: 3,
        modules: true,
        camelCase: true,
        sourceMap: define.rs_sourceMap,
        minimize: define.rs_production,
        localIdentName: define.rs_development
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[sha1:hash:hex:4]'
    }),

    new MiniCssExtractPlugin({
        filename: define.rs_production ? 'css/[name].[contenthash:4].css' : '[name].css',
        chunkFilename: define.rs_production ? '[id].[hash:3].css' : '[id].css',
    }),

    new ScriptExtHtmlWebpackPlugin({
        defer: [/vendors/, /bundle/, /.*bundle/],
        inline: 'startup',
        defaultAttribute: 'async'
    }),

    new CopyWebpackPlugin([
        {
            context: 'assets/misc',
            from: { glob: '**/*', dot: true },
            to: define.rs_dist,
            force: true,
            cache: true
        }, {
            context: 'assets/images',
            from: { glob: '**/*', dot: true },
            to: resolve(define.rs_dist, 'img'),
            force: true,
            cache: true
        }, {
            context: 'assets/fonts/SF',
            from: { glob: '**/*', dot: true },
            to: resolve(define.rs_dist, 'assets/fonts/SF'),
            force: true,
            cache: true
        }
    ], {
        ignore: [
            '.cache',
            '.gitkeep',
            '.DS_Store',
            '*.js',
            '*.css'
        ],
        copyUnmodified: true
    })
];

module.exports.config = plugins;
