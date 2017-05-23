'use strict';

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

// https://www.npmjs.com/package/sw-precache-webpack-plugin

const plugins = [
    new SWPrecacheWebpackPlugin({
        cacheId: 'RS-PWA',
        filename: 'sw.js',
        stripPrefix: 'dist/',
        staticFileGlobs: [
            'dist/*.js',
            'dist/*.css',
            'dist/*.svg',
            'dist/*.html',
            'dist/*.json',
            'dist/images/**.*',
            'dist/manifest.json'
        ],
        minify: true,
        swFilePath: 'dist/sw.js',
        mergeStaticsConfig: true,
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobsIgnorePatterns: [/\.map$|\.cache$/]
    })
];

module.exports.config = plugins;
