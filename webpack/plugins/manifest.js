'use strict';

const { resolve } = require('path');

const webpack = require('webpack');
const define  = require('../define');

const WebpackPwaManifest = require('webpack-pwa-manifest');

const plugins = [
    new WebpackPwaManifest({
        filename: "manifest.json",
        name: 'React starter',
        short_name: 'React PWA',
        description: 'React-starter a react web sterter kit!',
        background_color: '#673ab8',
        dir: 'auto',
        lang: 'ru-RU',
        prefix: 'fav/',
        display: 'standalone',
        orientation: 'any',
        start_url: '.',
        inject: true,
        fingerprints: false,
        ios: false,
        publicPath: null,
        includeDirectory: true,
        backgroundColor: '#fff',
        theme_color: '#2185d0',
        preferRelatedApplications: false,
        relatedApplications: [],
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
