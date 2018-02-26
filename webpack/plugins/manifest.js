'use strict';

const webpack = require('webpack');
const define  = require('../define');
const { resolve } = require('path');

const WebappManifest = require('webapp-manifest-plugin');
const WebappManifestPlugin = WebappManifest.default;

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FAVICON_PLUGIN = WebappManifest.FAVICON_PLUGIN;

// const WebpackPwaManifest = require('webpack-pwa-manifest');

const plugins = [
    new FaviconsWebpackPlugin({
        logo: 'assets/favicon/favicon.svg',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'fav/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#673ab8',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'React starter',
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
            firefox: true,
            android: true,
            favicons: true,
            appleIcon: true,
            opengraph: false,
            appleStartup: false,
            coast: false,
            twitter: false,
            yandex: false,
            windows: true
        }
    }),
    // new WebpackPwaManifest({
    //     lang: 'ru-RU',
    //     name: 'React Starter',
    //     short_name: 'React PWA',
    //     description: 'React Progressive Web App!',
    //     background_color: '#fff',
    //     theme_color: '#2185d0',
    //     start_url: '/',
    //     inject: true,
    //     ios: true,
    //     fingerprints: true,
    //     includeDirectory: true,
    //     preferRelatedApplications: false,
    //     publicPath: define.rs_output_path,
    //     orientation: 'any',
    //     filename: 'manifest.json',
    //     display: 'standalone',
    //     scope: '/',
    //     icons: [
    //         {
    //             src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
    //             sizes: [96, 128, 192, 256, 384, 512]
    //         },
    //         {
    //             src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
    //             size: '1024x1024'
    //         }
    //     ]
    // }),
    new WebappManifestPlugin({
        name: "React Starter",
        shortName: "React PWA",
        description: null,
        dir: 'auto',
        lang: 'ru-RU',
        display: 'standalone',
        orientation: 'any',
        startUrl: '/',
        backgroundColor: '#fff',
        themeColor: '#2185d0',
        preferRelatedApplications: false,
        relatedApplications: [],
        icons: FAVICON_PLUGIN,
        scope: '/'
    })
];

module.exports.config = plugins;
