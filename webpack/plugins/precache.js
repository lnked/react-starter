'use strict';

const { join } = require('path');

const define  = require('../define');
const environment = require('../environment').config;
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const cache = JSON.parse(environment.APP_NAME).toLowerCase().replace(/\s/g, '-');

const plugins = [
    // @ts-ignore
    new SWPrecacheWebpackPlugin({
        minify: true,
        verbose: false,
        cacheId: cache,
        filename: '../sw.js',
        stripPrefix: 'dist/',
        directoryIndex: '/',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        navigateFallback: '/index.html',

        staticFileGlobs: [
            'dist/*.html',
            'dist/*.json',
            'dist/**/*.js',
            'dist/**/*.br',
            'dist/**/*.gz',
            'dist/**/*.css',
            'dist/**/*.png',
            'dist/**/*.gif',
            'dist/**/*.svg',
            'dist/**/*.jpg',
            'dist/**/*.html',
            'dist/**/*.woff',
            'dist/**/*.woff2',
            'dist/assets/images/**.*',
            'dist/assets/manifest.webmanifest'
        ],

        importScripts: [],

        mergeStaticsConfig: false,

        maximumFileSizeToCacheInBytes: 8388608,
        staticFileGlobsIgnorePatterns: [
            /\.map$/,
            /\.DS_Store$/,
            /\.htaccess$/,
            /\.cache$/,
            /\.gitkeep$/,
            /\.robots.txt$/,
            /webpack-manifest\.json$/
        ],

        runtimeCaching: [
            {
                urlPattern: /\/api(.*)/,
                handler: 'networkFirst',
                options: {
                    debug: true
                }
            },
            {
                handler: 'cacheFirst',
                urlPattern: /(.*?)/,
            }
        ]
    })
];

module.exports.config = plugins;
