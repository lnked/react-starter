const { join, resolve } = require('path')

const webpack = require('webpack')
const define = require('../define')
const environment = require('../environment').config

const WebpackPwaManifest = require('webpack-pwa-manifest')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
        prefix: 'favicons/',
        inject: true,
        emitStats: false,
        statsFilename: '[hash:4].json',
        persistentCache: true,
        title: JSON.parse(environment.REACT_APP_NAME),
        background: JSON.parse(environment.REACT_APP_BG_COLOR),
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
            windows: false,
        },
    }),
    new WebpackPwaManifest({
        inject: true,
        filename: '/manifest.webmanifest',
        fingerprints: false,
        ios: false,
        publicPath: null,
        includeDirectory: true,
        name: JSON.parse(environment.REACT_APP_NAME),
        dir: 'auto',
        lang: 'ru-RU',
        display: 'standalone',
        orientation: 'any',
        description: JSON.parse(environment.REACT_APP_NAME_DESC),
        start_url: '.',
        short_name: JSON.parse(environment.REACT_APP_NAME_SHORT),
        theme_color: JSON.parse(environment.REACT_APP_THEME_COLOR),
        background_color: JSON.parse(environment.REACT_APP_BG_COLOR),
        prefer_related_applications: false,
        related_applications: [
            // {
            //     "platform": "play",
            //     "url": "https://play.google.com/store/apps/details?id={id_play}"
            // },
            // {
            //     "platform": "itunes",
            //     "url": "https://itunes.apple.com/us/app/?ls=1&mt=8"
            // }
        ],
        icons: [
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
                size: 1024,
                destination: join('pwa', 'ios'),
                ios: 'startup',
            },
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
                sizes: [120, 152, 167, 180],
                destination: join('icons', 'ios'),
                ios: true,
            },
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.png'),
                destination: join('icons', 'android'),
                sizes: [192, 512],
            },
            {
                src: resolve(define.rs_root, 'assets/favicon/favicon.svg'),
                destination: join('icons', 'android'),
                sizes: [36, 48, 72, 96, 144],
            },
        ],
    }),
]

module.exports.config = plugins
