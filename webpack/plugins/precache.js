'use strict';

const define  = require('../define');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

// const OfflinePlugin = require('offline-plugin');
// const SWPrecache = require('sw-precache');
// runtimeCaching: [{
//   urlPattern: /^https:\/\/example\.com\/api/,
//   handler: 'networkFirst'
// }, {
//   urlPattern: /\/articles\//,
//   handler: 'fastest',
//   options: {
//     cache: {
//       maxEntries: 10,
//       name: 'articles-cache'
//     }
//   }
// }]
// module.exports = {
//   staticFileGlobs: [
//     'app/css/**.css',
//     'app/**.html',
//     'app/images/**.*',
//     'app/js/**.js'
//   ],
//   stripPrefix: 'app/',
//   runtimeCaching: [{
//     urlPattern: /this\\.is\\.a\\.regex/,
//     handler: 'networkFirst'
//   }]
// };

// {
//   "staticFileGlobs": [
//     "app/css/**.css",
//     "app/**.html",
//     "app/images/**.*",
//     "app/js/**.js"
//   ],
//   "stripPrefix": "app/",
//   "runtimeCaching": [{
//     "urlPattern": "/express/style/path/(.*)",
//     "handler": "networkFirst"
//   }]
// }

// // via staticFileGlobs
// staticFileGlobs: ['/shell.html']
// navigateFallback: '/shell.html'

// // via dynamicUrlToDependencies
// dynamicUrlToDependencies: {
//   '/shell': ['/shell.hbs']
// },
// navigateFallback: '/shell'

const plugins = [
    // new OfflinePlugin({
    //     relativePaths: false,
    //     publicPath: '/',

    //     // No need to cache .htaccess. See http://mxs.is/googmp,
    //     // this is applied before any match in `caches` section
    //     excludes: ['.htaccess'],

    //     caches: {
    //         main: [
    //             'dist/*.html',
    //             'dist/**/*.css',
    //             'dist/**/*.js',
    //             'dist/**/*.gz',
    //             'dist/manifest.json'
    //         ],
    //         additional: [
    //             'dist/*.json',
    //             'dist/fav/**.*',
    //             'dist/fonts/**.*',
    //             'dist/images/**.*',
    //         ],
    //         optional: [':rest:']
    //     },

    //     caches: {
    //         main: [':rest:'],

    //         // All chunks marked as `additional`, loaded after main section
    //         // and do not prevent SW to install. Change to `optional` if
    //         // do not want them to be preloaded at all (cached only when first loaded)
    //         additional: ['*.chunk.js'],
    //     },

    //     // Removes warning for about `additional` section usage
    //     safeToUseOptionalCaches: true,

    //     AppCache: false
    // }),

    // new OfflinePlugin({
    //     cacheMaps: [{
    //         match: (requestUrl) => {
    //             return new URL('/shell', location);
    //         },
    //         requestTypes: ['navigate']
    //     }],
    //     caches: 'all',
    //     externals: ['/shell'],
    //     excludes: ['**/.*', '**/*.map', '**/*.js.br', '**/*.js.gzip', '**/*.css', '**/*.css.br', '**/*.css.gzip'],
    //     autoUpdate: false,
    //     AppCache: false,
    //     ServiceWorker: {
    //         publicPath: '/sw.js'
    //     }
    // }),

    new SWPrecacheWebpackPlugin({
        cacheId: 'RS-PWA',
        filename: 'sw.js',
        stripPrefix: 'dist/',

        dontCacheBustUrlsMatching: /\.\w{8}\./,

        staticFileGlobs: [
            'dist/*.html',
            'dist/*.json',
            'dist/**/*.css',
            'dist/**/*.js',
            'dist/**/*.gz',
            'dist/fav/**.*',
            'dist/images/**.*',
            'dist/manifest.json'
        ],

        minify: true,

        swFilePath: 'dist/sw.js',
        mergeStaticsConfig: true,
        maximumFileSizeToCacheInBytes: 800000,
        staticFileGlobsIgnorePatterns: [/\.map$|\.cache$|\.htaccess|manifest\.json$/],
        navigateFallback: define.rs_output_path,
        runtimeCaching: [
            {
                handler: 'cacheFirst',
                urlPattern: /(.*?)/,
            }
        ]
    })
];

module.exports.config = plugins;

// runtimeCaching: [{
//     urlPattern: /^*.*/,
//     handler: 'networkFirst'
// }],
//   "runtimeCaching": [
//     {
//       "urlPattern": "/shadow-v0.js",
//       "handler": "cacheFirst",
//       "options": {
//         "origin": "https://cdn.ampproject.org"
//       }
//     },
//     {
//       "urlPattern": "/documents",
//       "handler": "networkFirst"
//     },
//     {
//       "urlPattern": "/content/*",
//       "handler": "fastest",
//       "options": {
//         "cache": {
//           "maxEntries": 10
//         }
//       }
//     }
//   ]
