'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "../webpack-manifest.json"
    }),
    new WebpackChunkHash(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
        filename: define.rs_production ? 'css/[name].[contenthash:5].css' : '[name].css',
        chunkFilename: "[id].css"
    }),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendors/,
        inline: 'runtime',
        preload: ['vendors', 'index'],
        defaultAttribute: 'async'
    })
];

module.exports.config = plugins;
