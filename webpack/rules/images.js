'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const rules = [
    {
        test: define.rs_regexp_images,
        oneOf: [
            {
                issuer: define.rs_regexp_styles,
                oneOf: [
                    {
                        test: /\.svg$/,
                        loader: 'svg-url-loader',
                        options: {
                            name: define.rs_asset_name,
                            limit: 4096, // 4kb
                        },
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            name: define.rs_asset_name,
                            limit: 8192, // 4kb
                        },
                    },
                ],
            },
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_asset_name,
                    hash: 'sha512',
                    digest: 'hex'
                },
            },
        ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    },
    // {
    //     test: /\.jpe?g$/,
    //     loaders: [
    //         {
    //             loader: 'lqip-loader',
    //             options: {
    //                 name: '[hash:4].[ext]',
    //                 base64: true,
    //                 palette: true
    //             }
    //         },
    //     ]
    // },
    {
        test: define.rs_regexp_images,
        loader: 'image-webpack-loader',
        options: {
            bypassOnDebug: define.rs_development,
            mozjpeg: {
                quality: 80,
                progressive: define.rs_release
            },
            pngquant: {
                quality: '65-90',
                speed: 4
            },
            gifsicle: {
                colors: 256,
                interlaced: true,
                optimizationLevel: 3
            },
            optipng: {
                enabled: define.rs_release,
                optimizationLevel: 7
            },
            webp: {
                enabled: define.rs_release,
                quality: 80
            },
            svgo: svgo.config
        },
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    }
];

module.exports.config = rules;
