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
    // {
    //     /**
    //      * OPTION A:
    //      * default file-loader fallback
    //      **/
    //     test: /\.jpe?g$/,
    //     loaders: [
    //         {
    //             loader: 'lqip-loader',
    //             options: {
    //                 path: '/media', // your image going to be in media folder in the output dir
    //                 name: '[name].[ext]', // you can use [hash].[ext] too if you wish,
    //                 base64: true, // default: true, gives the base64 encoded image
    //                 palette: true, // default: false, gives the dominant colours palette
    //             }
    //         },
    //     ]

    //     /**
    //      * OPTION B:
    //      * Chained with your own url-loader or file-loader
    //      **/
    //     test: /\.(png|jpe?g)$/,
    //     loaders: [
    //       {
    //         loader: 'lqip-loader',
    //         options: {
    //           base64: true,
    //           palette: false
    //         }
    //       },
    //       {
    //         loader: "url-loader",
    //         options: {
    //           limit: 8000
    //         }
    //       }
    //   ]
    // }
];

module.exports.config = rules;
