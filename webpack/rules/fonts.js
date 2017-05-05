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
                    mimetype: 'application/font-woff',
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    },
    {
        test: /\.(ttf|eot|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    }
];

module.exports.config = rules;

// {
//   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
//   use: [{
//     loader: "url-loader",
//     options: {
//       limit: 10000,
//       mimetype: 'application/font-woff'
//     }
//   }]
// },
// {
//   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
//   use: [{
//     loader: "url-loader",
//     options: {
//       limit: 10000,
//       mimetype: 'application/font-woff'
//     }
//   }]
// },
// {
//   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//   use: [{
//     loader: "url-loader",
//     options: {
//       limit: 10000,
//       mimetype: 'application/octet-stream'
//     }
//   }]
// },
// {
//   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//   use: [{
//     loader: "file-loader"
//   }]
// },
// {
//   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//   use: [{
//     loader: "url-loader",
//     options: {
//       limit: 10000,
//       mimetype: 'image/svg+xml'
//     }
//   }]
// },
// {
//   test: /\.(jpe?g|gif|png)$/,
//   use: [{
//     loader: "file-loader",
//     options: {
//       emitFile: false,
//       name: '[path][name].[ext]'
//     }
//   }]
// }