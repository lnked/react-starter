'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : 'media/[hash:5].[ext]'
                }
            }
        ]
    }
];

module.exports.config = rules;