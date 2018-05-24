'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.pug$/,
        use: [
            {
                loader: 'pug-loader',
                options: {
                    pretty: define.rs_development
                }
            }
        ],
        include: define.rs_root
    }
];

module.exports.config = rules;
