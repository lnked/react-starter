'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "../webpack-manifest.json"
    }),

    new WebpackChunkHash(),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
];

module.exports.config = plugins;
