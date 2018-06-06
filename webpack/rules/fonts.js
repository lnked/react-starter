'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
            loader: "url-loader",
            options: {
                // Limit at 50k. Above that it emits separate files
                limit: 50000,
                // url-loader sets mimetype if it's passed.
                // Without this it derives it from the file extension
                mimetype: "application/font-woff",
                // Output below fonts directory
                // name: "./fonts/[name].[ext]",
                name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:4].[ext]',
                outputPath: 'fonts/'
            }
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    },
    {
        test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
            loader: "file-loader",
            options: {
                name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:4].[ext]',
                outputPath: 'fonts/'
            },
        },
        include: resolve(define.rs_root, '../src/assets/fonts')
    }
];

module.exports.config = rules;
