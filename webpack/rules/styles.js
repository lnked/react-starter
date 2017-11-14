'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            module: true,
            sourceMap: define.rs_analyzer,
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
            sourceMap: define.rs_development || define.rs_analyzer,
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
            sourceMap: define.rs_development || define.rs_analyzer,
            includePaths: [ define.rs_root ]
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: define.rs_development || define.rs_analyzer ? 'inline' : false,
            plugins: function () {
                return postcss.config;
            }
        }
    }
];

const rules = define.rs_generate_css ? [
        {
            test: /\.(css)$/,
            use: ExtractTextPlugin.extract({ // ExtractCssChunks.extract({
                fallback: 'style-loader',
                publicPath: '../',
                use: cssConfig
            }),
            include: [
                define.rs_node,
                define.rs_root
            ]
        },
        {
            test: /\.(s(a|c)ss)$/,
            use: ExtractTextPlugin.extract({ // ExtractCssChunks.extract({
                fallback: 'style-loader',
                publicPath: '../',
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
                loader: 'css-loader'
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
