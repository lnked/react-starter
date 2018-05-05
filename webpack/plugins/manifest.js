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
        prefix: 'f/',
        inject: true,
        emitStats: false,
        statsFilename: 'favs-[hash:4].json',
        persistentCache: true,
        background: JSON.parse(environment.APP_BG_COLOR),
        title: JSON.parse(environment.APP_NAME),
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
        }
    }),
    new WebpackPwaManifest({
        filename: "manifest.webmanifest",
        name: JSON.parse(environment.APP_NAME),
        short_name: JSON.parse(environment.APP_NAME_SHORT),
        description: JSON.parse(environment.APP_NAME_DESC),
        background_color: JSON.parse(environment.APP_BG_COLOR),
        dir: 'auto',
        lang: 'ru-RU',
        display: 'standalone',
        orientation: 'any',
        start_url: '.',
        inject: true,
        fingerprints: false,
        ios: false,
        publicPath: null,
        theme_color: JSON.parse(environment.APP_BG_COLOR),
        prefer_related_applications: false,
        related_applications: [],
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
