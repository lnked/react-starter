'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            module: true,
            importLoaders: 1,
            sourceMap: define.rs_analyzer,
            modules: define.rs_production,
            minimize: define.rs_production,
            discardComments: { removeAll: true },
            localIdentName: '[local]'
        }
    }
];

const usesConfig = [
    {
        loader: "typings-for-css-modules-loader",
        options: {
            sourceMap: define.rs_analyzer,
            importLoaders: 3,
            modules: true,
            namedExport: true,
            camelCase: true,
            localIdentName: define.rs_release ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:4]'
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: define.rs_development || define.rs_analyzer ? 'inline' : false,
            plugins: () => {
                return postcss.plugins;
            }
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: define.rs_development || define.rs_analyzer,
            includePaths: [ define.rs_root ]
        }
    }
];

const rules = define.rs_generate_css ? [
        {
            test: /\.(s(a|c)ss)$/,
            use: ExtractCssChunks.extract({
                fallback: 'style-loader',
                publicPath: '../',
                use: usesConfig
            }),
            include: [
                define.rs_node,
                define.rs_root
            ]
        },
        {
            test: /\.css$/,
            use: ExtractCssChunks.extract({
                fallback: 'style-loader',
                publicPath: '../',
                use: cssConfig
            })
        }
    ] : [
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
    },
    {
        test: /\.(css)$/,
        use: [
            {
                loader: 'style-loader'
            },
            ...cssConfig
        ]
    }
];

module.exports.config = rules;
