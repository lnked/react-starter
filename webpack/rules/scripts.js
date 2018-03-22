'use strict';

const { resolve } = require('path');
const define = require('../define');

const tsConfig = [];
const useConfig = [];

useConfig.push(
    {
        loader: 'cache-loader',
        options: {
            cacheDirectory: resolve(define.rs_base, '.cache/happypack')
        }
    }
);

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
            cacheDirectory: define.rs_development,
            extends: resolve(define.rs_base, '.babelrc')
        }
    }
);

tsConfig.push(
    {
        loader: 'awesome-typescript-loader'
    }
);

const rules = [
    {
        enforce: 'pre',
        test: /\.(j|t)s[x]?$/,
        options: {
            fix: false //define.rs_production
        },
        loader: 'eslint-loader',
        include: define.rs_root
    },
    {
        enforce: 'pre',
        test: /\.ts[x]?$/,
        options: {
            fix: false
        },
        loader: 'tslint-loader',
        include: define.rs_root
    },
    {
        test: /\.(j|t)s[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'happypack/loader'
    },
    {
        test: /\.ts[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: tsConfig
    }
];

module.exports.config = rules;
module.exports.loaders = useConfig;
