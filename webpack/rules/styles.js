'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const usesConfig = [
    {
        loader: 'css-loader',
        options: {
            modules: true,
            importLoaders: 1,
            minimize: define.rs_production,
            sourceMap: define.rs_development,
            discardComments: { removeAll: true },
            localIdentName: define.rs_production ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:5]'
        }
    },
    {
        loader: 'sasslint-loader',
        options: {
            quiet: true,
            emitError: true,
            failOnError: true,
            failOnWarning: true
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: define.rs_development
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: define.rs_development ? 'inline' : false,
            plugins: function () {
                return postcss.config;
            }
        }
    }
];

const rules = define.rs_generate_css ? [
        {
            test: /\.(s?(a|c)ss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: usesConfig
            })
        }
    ] : [
    {
        test: /\.(css|s[a|c]ss)$/,
        use: [
            {
                loader: 'style-loader'
            },
            ...usesConfig
        ],
        include: [ define.rs_root ]
    }
];

module.exports.config = rules;