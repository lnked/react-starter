'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const options = {
    style: true,
    images: true,
    imagesPlaceholders: true,
    traceColor: '#F0F0F0'
};

const loaders = [];

if (define.rs_imagesPlaceholders)
{
    loaders.push({
        test: /\.(gif|png|jpe?g)$/i,
        use: [
            {
                loader: "image-trace-loader",
                options: {
                    color: options.traceColor,
                }
            },
            {
                loader: 'sqip-loader',
                options: {
                    numberOfPrimitives: 20
                }
            }
        ]
    });
}

loaders.push({
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
                        limit: 4 * 1024, // 4kb
                    },
                },
                {
                    loader: 'url-loader',
                    options: {
                        name: define.rs_asset_name,
                        noquotes: true,
                        limit: 10 * 1024, // 8kb
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
});

loaders.push({
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
            interlaced: false,
            optimizationLevel: 3
        },
        optipng: {
            enabled: define.rs_release,
            optimizationLevel: 7
        },
        webp: {
            enabled: define.rs_release,
            quality: 75
        },
        svgo: svgo.config
    },
    exclude: [
        resolve(define.rs_root, '/assets/fonts'),
        resolve(define.rs_root, '/assets/svgstore')
    ]
});

module.exports.config = loaders;
