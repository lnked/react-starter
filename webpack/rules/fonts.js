'use strict';

const { resolve } = require('path');
const define = require('../define');
const name = define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:4].[ext]';

const rules = [
    {
        test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
            loader: "url-loader",
            options: {
                name,
                // Limit at 25k. Above that it emits separate files
                limit: 10240,
                // url-loader sets mimetype if it's passed.
                // Without this it derives it from the file extension
                mimetype: "application/font-woff",
                // Output below fonts directory
                // name: "./fonts/[name].[ext]",
                outputPath: 'fonts/'
            }
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
            name,
            limit: 10240,
            mimetype: 'application/octet-stream',
            outputPath: 'fonts/'
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    },
    {
        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
            name,
            outputPath: 'fonts/'
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
            name,
            limit: 10240,
            mimetype: 'image/svg+xml',
            outputPath: 'fonts/'
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    }
];

module.exports.config = rules;
