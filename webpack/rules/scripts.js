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
        exclude: /(node_modules|bower_components)/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: define.rs_development,
                    babelrc: false,
                    presets: [
                        ["latest", {
                            "es2015": {
                                "loose": true,
                                "modules": false
                            }
                        }], "react", "stage-0",
                        ...define.rs_development ? [ "react-hmre" ] : []
                    ],
                    plugins: [
                        ...define.rs_production ? [
                            "transform-react-inline-elements",
                            "transform-react-constant-elements",
                            "transform-react-pure-class-to-function",
                            ["transform-react-remove-prop-types", {
                                "mode": "wrap",
                                "ignoreFilenames": ["node_modules"]
                            }]
                        ]: [],
                        ...define.rs_development ? [
                            "transform-react-jsx-source",
                            "transform-react-jsx-self",
                            ["transform-runtime", {
                                "helpers": false,
                                "polyfill": false,
                                "regenerator": true,
                                "moduleName": "babel-runtime"
                            }]
                        ] : [],
                        "dynamic-import-system-import",
                        "transform-decorators-legacy",
                        "dynamic-import-webpack",
                        "dynamic-import-node",
                    ]
                }
            }
        ]
    }
];

module.exports.config = rules;