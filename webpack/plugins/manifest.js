'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define = require('../define');
const environment = require('../environment').config;

const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
        prefix: '/',
        inject: true,
        emitStats: false,
        statsFilename: '[hash:4].json',
        persistentCache: true,
        title: JSON.parse(environment.APP_NAME),
        background: JSON.parse(environment.APP_BG_COLOR),
        icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
        }
    }),
    new WebpackPwaManifest({
        filename: "../manifest.webmanifest",
        includeDirectory: true,
        inject: false,
        fingerprints: false,
        ios: false,
        publicPath: null,
        name: JSON.parse(environment.APP_NAME),
        dir: 'auto',
        lang: 'ru-RU',
        display: 'standalone',
        orientation: 'any',
        description: JSON.parse(environment.APP_NAME_DESC),
        start_url: '/index.html',
        short_name: JSON.parse(environment.APP_NAME_SHORT),
        theme_color: JSON.parse(environment.APP_THEME_COLOR),
        background_color: JSON.parse(environment.APP_BG_COLOR),
        prefer_related_applications: false,
        related_applications: [
            // {
            //     "platform": "play",
            //     "url": "https://play.google.com/store/apps/details?id=ru.agroclub"
            // },
            // {
            //     "platform": "itunes",
            //     "url": "https://itunes.apple.com/us/app/агро-клуб/id1401935493?ls=1&mt=8"
            // }
        ],
        icons: [
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
                sizes: [96, 128, 192, 256, 384, 512]
            },
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
                size: '1024x1024'
            }
        ]
    })
];

module.exports.config = plugins;
