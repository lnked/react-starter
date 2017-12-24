'use strict';

const webpack = require('webpack');
const define = require('../define');
const { resolve } = require('path');

const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BundleBuddyWebpackPlugin = require("bundle-buddy-webpack-plugin");

const plugins = [
    new BundleBuddyWebpackPlugin({sam: true}),
    new WebpackBundleSizeAnalyzerPlugin('./plain-report.txt'),
    new BundleAnalyzerPlugin({
        // Can be `server`, `static` or `disabled`.
        // In `server` mode analyzer will start HTTP server to show bundle report.
        // In `static` mode single HTML file with bundle report will be generated.
        // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
        analyzerMode: 'static',
        // Host that will be used in `server` mode to start HTTP server.
        analyzerHost: '127.0.0.1',
        // Port that will be used in `server` mode to start HTTP server.
        analyzerPort: 8888,
        // Path to bundle report file that will be generated in `static` mode.
        // Relative to bundles output directory.
        reportFilename: resolve(define.rs_dist, 'report.html'),
        // Automatically open report in default browser
        openAnalyzer: true,
        // If `true`, Webpack Stats JSON file will be generated in bundles output directory
        generateStatsFile: false,
        // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
        // Relative to bundles output directory.
        statsFilename: resolve(define.rs_dist, 'stats.json'),
        // Options for `stats.toJson()` method.
        // For example you can exclude sources of your modules from stats file with `source: false` option.
        // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
        statsOptions: null,
        // Log level. Can be 'info', 'warn', 'error' or 'silent'.
        logLevel: 'info'
    })
];

module.exports.config = plugins;
