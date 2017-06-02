'use strict';

const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack2-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_root,
        publicPath: define.rs_dist,
        fileName: "webpack-manifest.json"
    }),
    new WebpackChunkHash(),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor'],
        filename: 'js/vendor.[hash:5].js',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new ExtractTextPlugin({
        filename: define.rs_production ? 'css/[name].[hash:5].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new ResourceHintWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        defaultAttribute: 'async'
    }),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
    }),
    new webpack.HashedModuleIdsPlugin()
];

module.exports.config = plugins;
