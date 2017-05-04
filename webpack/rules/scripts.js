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
                        ['es2015', {'loose': true, 'modules': false}],
                        "stage-0"
                        // ,
                        // ...define.rs_production ? [
                        //     "react-optimize"
                        // ] : []
                    ],
                    plugins: [
                        ...define.rs_production ? [
                            "transform-react-constant-elements",
                            "transform-react-inline-elements"
                        ]: [],
                        "transform-decorators-legacy",
                        "dynamic-import-webpack",
                        "dynamic-import-node",
                        "transform-react-jsx",
                        "syntax-dynamic-import"
                        // ,
                        // ["module-resolver", {
                        //     "root": ["./app"],
                        //     "alias": {
                        //         "assets": "./assets",
                        //         "config": "./config",
                        //         "layouts": "./layouts",
                        //         "segments": "./segments",
                        //         "containers": "./containers",
                        //         "components": "./components"
                        //     }
                        // }]
                    ],
                    cacheDirectory: define.rs_development
                }
            }
        ],
        exclude: [
            resolve(define.rs_root, "../node_modules"),
            resolve(define.rs_root, "../bower_components")
        ]
    }
];

module.exports.config = rules;