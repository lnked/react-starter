'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const rules = [
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        options: {
            fix: define.rs_production
        },
        loader: 'eslint-loader',
        include: define.rs_root
    },
    {
        test: /\.js[x]?$/,
        exclude: /(node_modules\/|bower_components\/)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: define.rs_development
                }
            }
        ]
    }
];

module.exports.config = rules;