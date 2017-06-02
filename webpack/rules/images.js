'use strict';

const { resolve } = require('path');
const define = require('../define');

const svgoConfig = {
    plugins: [
        {removeTitle:true},
        {removeDesc:true},
        {removeViewBox:false},
        {convertPathData:false},
        {removeEmptyAttrs:false},
        {removeDoctype:true},
        {removeMetadata:true},
        {removeComments:true},
        {removeUselessDefs:true},
        {removeXMLProcInst:true},
        {removeDimensions:true},
        {cleanupNumericValues: {
            floatPrecision: 2
        }},
        {cleanupIDs: {
            prefix: '-',
            minify: false
        }},
        {convertColors: {
            names2hex: true,
            shorthex: false,
            rgb2hex: true
        }},
        {removeUselessStrokeAndFill:false}
    ]
}

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
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
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
                    svgo: svgoConfig
                }
            }
        ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    },
    {
        test: /\.svg$/i,
        use: [
            {
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    // emitFile: false,
                    spriteFilename: 'svgstore.svg'
                }
            },
            {
                loader: 'svg-fill-loader',
                options: {
                    raw: false,
                    selector: 'path,circle'
                }
            },
            {
                loader: 'svgo-loader',
                options: svgoConfig
            }
        ],
        include: [ resolve(define.rs_root, '/assets/svgstore') ]
    }
];

module.exports.config = rules;