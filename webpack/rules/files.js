'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.txt$/,
        use: ['raw-loader']
    },
    {
        test: /\.json$/,
        use: [
            {
                loader: 'json-loader', // 'file-loader'
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: '[name]-[hash:11].[ext]'
                }
            }
        ]
    },
    {
        test: /\.xml$/,
        use: [
            {
                loader: 'xml-loader',
                options: {
                    name: '[name].[ext]',
                    explicitChildren: false
                }
            }
        ]
    }
];

module.exports.config = rules;