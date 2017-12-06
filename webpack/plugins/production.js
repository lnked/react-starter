'use strict';

const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('webpack-plugin-chunk-manifest');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

// const bundles = {
//   'vendor-mweb': [
//     'app/mobile/polyfills.js',
//     'intl',
//     'normalizr',
//     'react-dom',
//     'react-redux',
//     'react-router-dom',
//     'react',
//     'redux'
//   ],
//   'entryChunk-webpack': 'app/mobile/runtime.js',
//   'entryChunk-mobile': 'app/mobile/index.js'
// };

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
        name: 'runtime',
        minChunks: Infinity
    }),

    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     filename: 'js/vendor.[hash:5].js',
    //     minChunks: Infinity,
    //     chunks: ['entryChunk-mobile']
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'entryChunk-webpack',
    //     minChunks: Infinity,
    //     chunks: ['vendor-mweb']
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     children: true,
    //     name: 'entryChunk-mobile',
    //     minChunks: (module, count) => {
    //         return module.resource && (isCommonLib(resource) || count >= 3);
    //     }
    // }),

    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json'
    }),
    new ExtractCssChunks({
        filename: define.rs_production ? 'css/[name].[contenthash:5].css' : '[name].css',
        allChunks: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        inline: 'runtime',
        preload: ['vendor', 'app'],
        defaultAttribute: 'async'
    })
];

module.exports.config = plugins;
