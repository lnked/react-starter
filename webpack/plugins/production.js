'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define  = require('../define');

const { GuessPlugin } = require('guess-webpack');
const environment = require('../environment').config;
const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

const plugins = [
    GuessPlugin({ GA: environment.GOOGLE_ANALYTICS_ID }),

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
