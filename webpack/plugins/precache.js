'use strict';

const define  = require('../define');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const plugins = [
    new SWPrecacheWebpackPlugin({
        minify: true,
        verbose: false,
        cacheId: 'RS-PWA',
        filename: 'sw.js',
        stripPrefix: 'dist/',
        directoryIndex: '/',
        dontCacheBustUrlsMatching: /\.\w{8}\./,

        navigateFallback: define.rs_output_path,

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
            'dist/fav/**.*',
            'dist/images/**.*',
            'dist/manifest.json'
        ],

        importScripts: [],

        mergeStaticsConfig: true,
        maximumFileSizeToCacheInBytes: 8388608,
        staticFileGlobsIgnorePatterns: [/\.map$/, /\.DS_Store$/, /\.htaccess$/, /\.cache$/, /webpack-manifest\.json$/],

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
