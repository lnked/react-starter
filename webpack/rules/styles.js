'use strict';

const define = require('../define');
const postcss = require('../postcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            modules: define.rs_production,
            sourceMap: define.rs_sourceMap,
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
            // silent: true,
            // banner: false,
            modules: true,
            camelCase: true,
            namedExport: true
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: define.rs_sourceMap,
            plugins: () => {
                return postcss.plugins;
            }
        }
    },
    {
        loader: 'sass-loader',
        options: {
            expanded: true,
            sourceMap: define.rs_sourceMap,
            sourceMapContents: define.rs_sourceMap,
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
