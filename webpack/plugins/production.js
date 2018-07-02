'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define = require('../define');

const Critters = require('critters-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

console.log('regular', `${path.resolve(define.rs_root)}/(([\w\-]+/)?([\w\-]+/)?)?[\w\-]+.(j|t)sx?`)

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "../webpack-manifest.json"
    }),

    new Critters({
        fonts: false,
        external: false,
        preload : 'js-lazy',
        preloadFonts: true
    }),

    // new HtmlCriticalWebpackPlugin({
    //     base: define.rs_dist,
    //     src: 'index.html',
    //     dest: 'index.html',
    //     inline: true,
    //     minify: true,
    //     extract: true,
    //     width: 375,
    //     height: 565,
    //     penthouse: {
    //         blockJSRequests: false
    //     }
    // }),

    // new PrepackWebpackPlugin({
    //     sourceMaps: define.rs_sourceMap,
    //     inlineExpressions: true
    // }),

    new webpack.HashedModuleIdsPlugin(),

    new WebpackChunkHash(),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
];

module.exports.config = plugins;
