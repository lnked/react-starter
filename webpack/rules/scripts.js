'use strict';

const { resolve } = require('path');

const define = require('../define');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

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

useConfig.push(
    {
        loader: 'babel-loader',
        options: {
            babelrc: true,
            cacheDirectory: define.rs_development
        }
    }
);

tsConfig.push(
    {
        loader: 'babel-loader'
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
        test: define.rs_regexp_scripts,
        options: {
            fix: false,
            formatter: eslintFormatter
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
        enforce: 'pre',
        test: /\.(t|j)s[x]?$/,
        loader: 'source-map-loader'
    },
    {
        test: define.rs_regexp_scripts,
        exclude: /(node_modules|bower_components)/,
        // use: useConfig
        use: 'happypack/loader'
    },
    {
        test: /\.ts[x]?$/,
        exclude: [/(node_modules|bower_components)/, /\.(spec|e2e)\.ts(x?)$/],
        use: tsConfig
    }
];

module.exports.config = rules;
module.exports.loaders = useConfig;
