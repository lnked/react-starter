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
const AsyncModulePlugin = require('async-module-loader/plugin');

const plugins = [
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
        /scss\.d\.ts$/
    ]),
    new WebpackNotifierPlugin(),
    new HappyPack({
        loaders: scripts.loaders,
        threads: 4,
        verbose: false
    }),
    new webpack.ContextReplacementPlugin(
        /moment[\/\\]locale$/,
        /(en-gb|ru)\.js/
    ),
    new AsyncModulePlugin(),
    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
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
