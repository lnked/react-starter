'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define  = require('../define');
const helpers = require('../helpers');
const scripts = require('../rules/scripts')

const HappyPack = require('happypack');
const SvgStore = require('webpack-svgstore-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

// const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader')

const plugins = [
    new webpack.DefinePlugin({
        'process.env.BROWSER': false,
        '__DEV__': define.rs_development
    }),
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/
    ]),
    new WebpackNotifierPlugin(),
    // new CheckerPlugin(),
    // new TsConfigPathsPlugin({
    //     baseUrl: resolve(__dirname, '../../src'),
    //     tsconfig: resolve(__dirname, '../../tsconfig.json'),
    //     compiler: 'typescript'
    // }),
    new HappyPack({
        loaders: scripts.loaders,
        threads: 4,
        verbose: false
    }),
    new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /(en-gb|ru)\.js/
    ),
    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production,
        options: {}
    }),
    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'vendors')),
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images', copyUnmodified: true },
        {
            context: 'assets/misc',
            from: { glob: '**/*', dot: true },
            to: define.rs_dist,
            copyUnmodified: true
        }
    ])
];

module.exports.config = plugins;
