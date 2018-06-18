'use strict';

const define = require('../define');
const postcss = require('../postcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const minimizeCssOptions = {
    discardComments: { removeAll: true }
};

const cssConfig = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 3,
            modules: true,
            sourceMap: define.rs_sourceMap,
            minimize: define.rs_production,
            localIdentName: define.rs_development
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[sha1:hash:hex:4]'
        }
    }
];

const usesConfig = [];

// if (define.rs_development) {
//     usesConfig.push({
//         loader: "typings-for-css-modules-loader",
//         options: {
//             modules: true,
//             camelCase: true,
//             namedExport: true
//         }
//     });
// }

usesConfig.push({
    loader: 'typed-css-modules-loader',
    options: {
        silent: true,
        modules: true,
        camelCase: 'dashesOnly',
        namedExport: true
    }
});

usesConfig.push({
    loader: 'postcss-loader',
    options: {
        sourceMap: define.rs_sourceMap,
        plugins: () => {
            return postcss.plugins;
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
                MiniCssExtractPlugin.loader,
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
            {
                loader: 'style-loader'
            },
            ...cssConfig
        ]
    }
];

module.exports.config = rules;
