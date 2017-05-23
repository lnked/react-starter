'use strict';

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

// https://www.npmjs.com/package/sw-precache-webpack-plugin

const plugins = [
    new SWPrecacheWebpackPlugin({
        cacheId: 'react-starter',
        filename: 'sw.js',
        staticFileGlobs: [
            'assets/images/**.*'
        ],
        minify: true,
        stripPrefix: 'assets/',
        mergeStaticsConfig: true,
        maximumFileSizeToCacheInBytes: 4194304,
        runtimeCaching: [{
            handler: 'cacheFirst',
            urlPattern: /[.]js$|[.]css$|[.]svg$/,
        }]
    })
];

module.exports.config = plugins;
