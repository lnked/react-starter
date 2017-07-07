'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            module: true,
            sourceMap: false,
            modules: define.rs_production,
            minimize: define.rs_production,
            discardComments: { removeAll: true },
            localIdentName: '[name]'
        }
    }
];

const usesConfig = [
    {
        loader: 'css-loader',
        options: {
            module: true,
            modules: define.rs_production,
            importLoaders: 1,
            minimize: define.rs_production,
            sourceMap: define.rs_development,
            discardComments: { removeAll: true },
            localIdentName: define.rs_production ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:4]'
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
            outputStyle: define.rs_production ? 'collapsed' : 'expanded',
            sourceMap: define.rs_production,
            includePaths: [ define.rs_root ]
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
            test: /\.(css)$/,
            use: ExtractTextPlugin.extract({
                publicPath: '../',
                fallback: 'style-loader',
                allChunks: true,
                use: cssConfig
            }),
            include: [
                define.rs_node,
                define.rs_root
            ]
        },
        {
            test: /\.(s(a|c)ss)$/,
            use: ExtractTextPlugin.extract({
                publicPath: '../',
                fallback: 'style-loader',
                allChunks: true,
                use: usesConfig
            }),
            include: [
                define.rs_node,
                define.rs_root
            ]
        }
    ] : [
    {
        test: /\.(css)$/,
        use: [
            {
                loader: 'style-loader'
            },
            ...cssConfig
        ],
        include: [
            define.rs_node,
            define.rs_root
        ]
    },
    {
        test: /\.(s(a|c)ss)$/,
        use: [
            {
                loader: 'style-loader'
            },
            ...usesConfig
        ],
        include: [
            define.rs_node,
            define.rs_root
        ]
    }
];

module.exports.config = rules;