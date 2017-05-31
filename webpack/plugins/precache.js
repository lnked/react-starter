'use strict';

const OfflinePlugin = require('offline-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const plugins = [
    // new OfflinePlugin({
    //     relativePaths: false,
    //     publicPath: '/',

    //     // No need to cache .htaccess. See http://mxs.is/googmp,
    //     // this is applied before any match in `caches` section
    //     excludes: ['.htaccess'],

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
    //         match: function(requestUrl) {
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
        staticFileGlobs: [
            'dist/*.js',
            'dist/*.gz',
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
        staticFileGlobsIgnorePatterns: [/\.map$|\.cache$/],
        navigateFallback: '/'
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
