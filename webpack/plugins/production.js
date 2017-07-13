'use strict';

const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack2-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "webpack-manifest.json"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/vendor.[hash:5].js',
        minChunks(module) {
            return module.context && module.context.indexOf('node_modules') >= 0;
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest',
        inlineManifest: true
    }),
    new ExtractCssChunks({
        filename: define.rs_production ? 'css/[name].[contenthash:5].css' : '[name].css',
    }),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        inline: 'manifest',
        preload: ['vendor', 'app'],
        defaultAttribute: 'async'
    })
];

module.exports.config = plugins;
