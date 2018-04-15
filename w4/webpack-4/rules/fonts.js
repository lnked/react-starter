'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.(woff(2)?)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    },
    {
        test: /\.([ot]tf)$/,
        use: [
            {
                loader: "url-loader",
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    },
    {
        test: /\.(eot|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : 'fonts/[hash:8].[ext]'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    }
];

module.exports.config = rules;
