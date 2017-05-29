'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        options: {
            fix: define.rs_production
        },
        loader: 'eslint-loader',
        include: define.rs_root
    },
    {
        test: /\.js[x]?$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        "react",
                        ["es2015", {
                            // "loose": true,
                            // "modules": false
                        }],
                        "stage-0",
                        ...define.rs_development ? [ "react-hmre" ] : []
                    ],
                    plugins: [
                        ...define.rs_production ? [
                            // "transform-react-inline-elements",
                            // "transform-react-constant-elements",
                            // "transform-react-pure-class-to-function",
                            // ["transform-react-remove-prop-types", {
                            //     "mode": "wrap",
                            //     "ignoreFilenames": ["node_modules"]
                            // }]
                        ]: [],
                        // "dynamic-import-system-import",
                        // "transform-decorators-legacy",
                        // "dynamic-import-webpack",
                        // "dynamic-import-node",
                        // ["transform-react-jsx", { "pragma": "h" }],
                        // ["transform-runtime", {
                        //     "helpers": false,
                        //     "polyfill": false,
                        //     "regenerator": true,
                        //     "moduleName": "babel-runtime"
                        // }]
                    ],
                    cacheDirectory: define.rs_development
                }
            }
        ]
        // exclude: [
        //     resolve(define.rs_root, "../node_modules"),
        //     resolve(define.rs_root, "../bower_components")
        // ]
    }
];

module.exports.config = rules;