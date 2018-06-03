'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
// const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
const Critters = require('critters-webpack-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "../webpack-manifest.json"
    }),

    new Critters({
        // Outputs: <link rel="preload" onload="this.rel='stylesheet'">
        // String Which preload strategy to use
        preload: 'swap',

        // Don't inline critical font-face rules, but preload the font URLs:
        preloadFonts: true

        // Boolean Inline styles from external stylesheets (default: true)
        // external: true,

        // Boolean Add <noscript> fallback to JS-based strategies
        // noscriptFallback: true,

        // inlineFonts Boolean Inline critical font-face rules (default: false)
        // preloadFonts Boolean Preloads critical fonts (default: true)
        // fonts Boolean Shorthand for setting inlineFonts+preloadFonts- values:
        // true to inline critical font-face rules and preload the fonts
        // false to don't inline any font-face rules and don't preload fonts
        // compress Boolean Compress resulting critical CSS (default: true)
    }),

    // new PrepackWebpackPlugin({
    //     sourceMaps: true,
    //     inlineExpressions: true
    // }),

    new WebpackChunkHash(),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
];

module.exports.config = plugins;
