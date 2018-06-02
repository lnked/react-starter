'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            module: true,
            modules: true,
            importLoaders: 2,
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
            sourceMap: define.rs_development,
            importLoaders: 3,
            silent: true,
            banner: false,
            modules: true,
            camelCase: true,
            namedExport: true,
            localIdentName: define.rs_release ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:4]'
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: define.rs_development,
            plugins: () => {
                return postcss.plugins;
            }
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: define.rs_development,
            includePaths: [ define.rs_root ]
        }
    }
];

const rules = define.rs_generate_css ? [
        {
            test: define.rs_regexp_styles,
            use: [
                MiniCssExtractPlugin.loader,
                ...usesConfig
            ],
            include: [
                define.rs_node,
                define.rs_root
            ]
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                ...cssConfig
            ]
        }
    ] : [
    {
        test: define.rs_regexp_styles,
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
