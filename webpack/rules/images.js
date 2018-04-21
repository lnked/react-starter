'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const rules = [
    {
        test: /.*\.(jpe?g|png|gif|ico|webp|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: 'images/[name]-[hash:5].[ext]'
                }
            }
        ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    },
    {
        enforce: 'pre',
        test: /.*\.(jpe?g|png|gif|ico|webp|svg)$/i,
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
