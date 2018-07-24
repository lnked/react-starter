'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: define.rs_regexp_files,
        use: ['file-loader']
    },
    {
        test: /\.txt$/,
        use: ['raw-loader']
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
