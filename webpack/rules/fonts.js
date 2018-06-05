'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    // {
    //     test: /\.(woff(2)?)$/,
    //     use: [
    //         {
    //             // loader: 'url-loader',
    //             loader: 'file-loader',
    //             options: {
    //                 // limit: 10000,
    //                 // mimetype: 'application/font-woff'
    //                 name: define.rs_development ? '[path][name].[ext]?[hash:8]' : 'fonts/[hash:8].[ext]'
    //             }
    //         }
    //     ],
    //     include: resolve(define.rs_root, '/assets/fonts')
    // },
    // {
    //     test: /\.([ot]tf)$/,
    //     use: [
    //         {
    //             // loader: "url-loader",
    //             loader: "file-loader",
    //             options: {
    //                 // limit: 10000,
    //                 // mimetype: 'application/octet-stream'
    //                 name: define.rs_development ? '[path][name].[ext]?[hash:8]' : 'fonts/[hash:8].[ext]'
    //             }
    //         }
    //     ],
    //     include: resolve(define.rs_root, '/assets/fonts')
    // },
    // {
    //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //     loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    //     query: {
    //         name: 'static/media/files/[name].[hash:8].[ext]'
    //     }
    // }, {
    //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //     loader: 'file-loader',
    //     query: {
    //         name: 'static/media/fonts/[name].[hash:8].[ext]'
    //     }
    // },
    {
        // test: /\.(eot|svg)$/,
        test: /\.(woff(2)?|ttf|[ot]tf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:4].[ext]',
                    outputPath: 'fonts/'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    }
];

module.exports.config = rules;
