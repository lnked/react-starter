'use strict';

const define = require('../define');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('path');

const minimizeCssOptions = {
    discardComments: { removeAll: true }
};

const styleLoader = [
    {
        loader: 'style-loader'
    }
]

const miniCssLoader = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: './'
        }
    }
]

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 3,
            modules: true,
            camelCase: true,
            sourceMap: define.rs_sourceMap,
            minimize: define.rs_production,
            localIdentName: define.rs_development
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[sha1:hash:hex:4]'
        }
    },
    {
        loader: 'resolve-url-loader'
    }
];

const usesConfig = [];

usesConfig.push({
    loader: 'typed-css-modules-loader',
    options: {
        silent: true,
        modules: true,
        camelCase: true,
        namedExport: true
    }
});

usesConfig.push({
    loader: 'postcss-loader',
    options: {
        sourceMap: define.rs_sourceMap,
        config: {
            path: resolve(__dirname, '../postcss.config.js')
        }
    }
});

usesConfig.push({
    loader: 'sass-loader',
    options: {
        expanded: true,
        sourceMap: define.rs_sourceMap,
        sourceMapContents: define.rs_sourceMap,
        includePaths: [ define.rs_root ]
    }
});

const rules = define.rs_generate_css ? [
        {
            test: define.rs_regexp_styles,
            use: [
                ...miniCssLoader,
                ...cssConfig,
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
                ...miniCssLoader,
                ...cssConfig
            ]
        }
    ] : [
    {
        test: define.rs_regexp_styles,
        use: [
            ...styleLoader,
            ...cssConfig,
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
            ...styleLoader,
            ...cssConfig
        ]
    }
];

module.exports.config = rules;
