'use strict';

const { resolve } = require('path');

const define = require('../define');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const tsConfig = [];
const jsConfig = [];

jsConfig.push(
    {
        loader: 'cache-loader',
        options: {
            cacheDirectory: resolve(define.rs_base, '.cache/loader')
        }
    }
);

jsConfig.push(
    {
        loader: 'babel-loader',
        options: {
            babelrc: true,
            compact: define.rs_production,
            cacheDirectory: define.rs_development
        }
    }
);

tsConfig.push(
    {
        loader: 'awesome-typescript-loader',
        options: {
            useBabel: false,
            useCache: false,
            forkChecker: true,
            happyPackMode: !!define.rs_parallel,
            transpileOnly: true,
            useWebpackText: true,
            errorsAsWarnings: true,
            useTranspileModule: true,
            forceIsolatedModules: false
        }
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
        loader: 'source-map-loader',
        exclude: /(node_modules|bower_components)/
    },
    {
        test: define.rs_regexp_scripts,
        exclude: /(node_modules|bower_components)/,
        use: define.rs_parallel
            ? 'happypack/loader'
            : jsConfig
    },
    {
        test: /\.ts[x]?$/,
        // exclude: [/(node_modules|bower_components)/, /\.(spec|e2e)\.ts(x?)$/],
        exclude: [/(node_modules|bower_components)/],
        use: [...jsConfig, ...tsConfig],
    }
];

module.exports.config = rules;
module.exports.loaders = jsConfig;
