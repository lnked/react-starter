'use strict';

const { resolve } = require('path');
const define = require('../define');

const useConfig = [];
const typeScriptConfig = [];

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

typeScriptConfig.push(
    {
        loader: 'ts-loader',
        options: {
            transpileOnly: true
        }
    }
);

const rules = [
    {
        enforce: 'pre',
        test: /\.(j|t)s[x]?$/,
        options: {
            fix: define.rs_production
        },
        loader: 'eslint-loader',
        include: define.rs_root
    },
    {
        test: /\.(j|t)s[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: useConfig
    },
    {
        test: /\.ts[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: typeScriptConfig
    }
];

module.exports.config = rules;
