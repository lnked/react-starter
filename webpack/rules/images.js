'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const rules = [
    {
        test: define.rs_regexp_images,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_asset_name,
                    hash: 'sha512',
                    digest: 'hex',
                    useRelativePath: false
                }
            },
            {
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
                }
            }
        ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    }
];

module.exports.config = rules;
