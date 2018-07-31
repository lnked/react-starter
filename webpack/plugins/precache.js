'use strict';

const { join, resolve } = require('path');

const define  = require('../define');
const environment = require('../environment').config;
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const cache = JSON.parse(environment.APP_NAME).toLowerCase().replace(/\s/g, '-');

const plugins = [
    // @ts-ignore
    new SWPrecacheWebpackPlugin({
        minify: true,
        verbose: true,
        cacheId: cache,
        filename: resolve(define.rs_dist, 'sw.js'),
        stripPrefix: `${define.rs_distBase}/`,
        directoryIndex: '/',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        navigateFallback: '/index.html',
        navigateFallbackWhitelist: [/^(?!\/__).*/],

        staticFileGlobs: [
            `${define.rs_distBase}/**/*.js`,
            `${define.rs_distBase}/**/*.json`,
            `${define.rs_distBase}/**/*.gz`,
            `${define.rs_distBase}/**/*.gz`,
            `${define.rs_distBase}/**/*.br`,
            `${define.rs_distBase}/**/*.css`,
            `${define.rs_distBase}/**/*.png`,
            `${define.rs_distBase}/**/*.gif`,
            `${define.rs_distBase}/**/*.svg`,
            `${define.rs_distBase}/**/*.jpe?g`,
            `${define.rs_distBase}/**/*.html`,
            `${define.rs_distBase}/**/*.woff2?`,
            `${define.rs_distBase}/assets/images/**.*`,
            `${define.rs_distBase}/assets/manifest.webmanifest`
        ],

        importScripts: [],

        mergeStaticsConfig: false,

        maximumFileSizeToCacheInBytes: 18388608,

        staticFileGlobsIgnorePatterns: [
            /\.map$/,
            /\.DS_Store$/,
            /\.htaccess$/,
            /\.cache$/,
            /\.gitkeep$/,
            /\.robots.txt$/,
            /react-loadable\.json$/,
            /asset-manifest\.json$/,
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
