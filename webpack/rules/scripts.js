'use strict';

const { resolve } = require('path');
const define = require('../define');
const svgo = require('../svgo');

const useConfig = [];

if (define.rs_development) {
    useConfig.push(
        {
            loader: 'react-hot-loader/webpack'
        }
    )
}

useConfig.push(
    {
        loader: 'babel-loader',
        options: {
            cacheDirectory: define.rs_development
        }
    }
);

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
        use: useConfig
    }
];

module.exports.config = rules;