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
                            limit: 4096,
                        },
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            name: define.rs_asset_name,
                            limit: 4096,
                        },
                    },
                ],
            },
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_asset_name,
                    hash: 'sha512',
                    digest: 'hex',
                },
            },
        ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    },
    {
        test: /\.(png|jpe?g)$/,
        loaders: [
            {
                loader: 'lqip-loader',
                options: {
                    name: define.rs_asset_name,
                    base64: true,
                    palette: false
                }
            },
            {
                loader: 'url-loader',
                options: {
                    limit: 8000
                }
            }
        ]
    },
    {
        enforce: 'pre',
        test: define.rs_regexp_images,
        options: {
            bypassOnDebug: define.rs_development,
            mozjpeg: {
                quality: 70,
                progressive: true
            },
            pngquant:{
                quality: '65-90',
                speed: 4
            },
            gifsicle: {
                colors: 256,
                interlaced: false,
                optimizationLevel: 3
            },
            optipng: {
                optimizationLevel: 7
            },
            svgo: svgo.config
        },
        loader: 'image-webpack-loader',
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    }
];

module.exports.config = rules;
