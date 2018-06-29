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
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

// const layouts = {};

// glob.sync(`${basePath}/src/layouts/*.?(pug|jade)`).forEach((item) => {
//     layouts.plugins.push(
//         new HtmlWebpackPlugin(helpers.generateConfig(item, 'app', 'vendors'))
//     );
// });

const plugins = [
    new ProgressBarPlugin(),

    new webpack.DefinePlugin({
        'process.env': Object.assign(formatter(environment, true), {
            'BROWSER': true,
            'NODE_ENV': JSON.stringify(define.rs_environment)
        }),
        '__DEV__': define.rs_development
    }),

    new HappyPack({
        loaders: scripts.loaders,
        threads: 4,
        verbose: false
    }),

    // /(en-gb|en|ru)/
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),

    new ReactLoadablePlugin({
        filename: './dist/react-loadable.json',
    }),

    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production,
        options: {}
    }),

    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'vendors')),

    new MiniCssExtractPlugin({
        filename: define.rs_production ? 'css/[name].[contenthash:5].css' : '[name].css',
        chunkFilename: "[id].css"
    }),

    new ScriptExtHtmlWebpackPlugin({
        defer: [/vendors/, /.*bundle/],
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
