'use strict';

const rules = [];

const { resolve } = require('path');
const define = require('./define');
const postcss = require('./postcss');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log('scripts: ', require('./rules/scripts').config);

rules.push(
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        options: {
            fix: define.rs_production
        },
        loader: 'eslint-loader',
        include: define.rs_root
    }
);

rules.push(
    {
        test: /\.txt$/,
        use: ['raw-loader']
    }
);

rules.push(
    {
        test: /\.pug$/,
        use: ['pug-loader'],
        include: define.rs_root
    }
);

rules.push(
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
                        "stage-0",
                        ...define.rs_production ? [
                            "react-optimize"
                        ] : []
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
                        "syntax-dynamic-import",
                        ["module-resolver", {
                            "root": ["./app"],
                            "alias": {
                                "assets": "./assets",
                                "config": "./config",
                                "layouts": "./layouts",
                                "segments": "./segments",
                                "containers": "./containers",
                                "components": "./components"
                            }
                        }]
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
);

// rules.push(
//     {
//         test: /\.(css|s[a|c]ss)$/,
//         use: ExtractTextPlugin.extract({
//             fallback: 'style-loader',
//             use: [
//                 {
//                     loader: 'css-loader',
//                     options: {
//                         modules: true,
//                         importLoaders: 1,
//                         minimize: define.rs_production,
//                         sourceMap: define.rs_development,
//                         localIdentName: define.rs_production ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:5]'
//                     }
//                 },
//                 {
//                     loader: 'sasslint-loader',
//                     options: {
//                         quiet: true,
//                         emitError: true,
//                         failOnError: true,
//                         failOnWarning: true
//                     }
//                 },
//                 {
//                     loader: 'sass-loader',
//                     options: {
//                         sourceMap: define.rs_development
//                     }
//                 },
//                 {
//                     loader: 'postcss-loader',
//                     options: {
//                         sourceMap: define.rs_development ? 'inline' : false,
//                         plugins: function () {
//                             return postcss.config;
//                         }
//                     }
//                 }
//             ]
//         })
//     }
// );

rules.push(
    {
        test: /\.(css|s[a|c]ss)$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    minimize: define.rs_production,
                    sourceMap: define.rs_development,
                    localIdentName: define.rs_production ? '_[hash:5]' : '[path]-[name]---[local]---[hash:base64:5]'
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
                    sourceMap: define.rs_development
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
        ],
        include: [ define.rs_root ]
    }
);

rules.push(
    {
        test: /\.svg$/,
        use: [
            {
                loader: 'raw-loader',
                options: {
                    svgo: {
                        plugins: [{removeTitle: false}],
                        floatPrecision: 2
                    }
                }
            }
        ],
        include: [ resolve(define.rs_root, '/assets/svgstore') ]
    },
    {
        test: /.*\.(jpe?g|png|gif|ico|webp|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: '[name]-[hash:11].[ext]'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
                    mozjpeg: {
                        quality: 70,
                        progressive: true
                    },
                    pngquant:{
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        colors: 256,
                        interlaced: false,
                        optimizationLevel: 3
                    },
                    optipng: {
                        optimizationLevel: 7
                    },
                    svgo: {
                        plugins: [
                            {removeTitle:true},
                            {removeDesc:true},
                            {removeViewBox:false},
                            {convertPathData:false},
                            {removeEmptyAttrs:false},
                            {removeDoctype:true},
                            {removeMetadata:true},
                            {removeComments:true},
                            {removeUselessDefs:true},
                            {removeXMLProcInst:true},
                            {removeDimensions:true},
                            {cleanupNumericValues: {
                                floatPrecision: 2
                            }},
                            {cleanupIDs: {
                                prefix: '-',
                                minify: false
                            }},
                            {convertColors: {
                                names2hex: true,
                                shorthex: false,
                                rgb2hex: true
                            }},
                            {removeUselessStrokeAndFill:false}
                        ]
                    }
                }
            }
        ],
        include: [ define.rs_root ],
        exclude: [
            resolve(define.rs_root, '/assets/fonts'),
            resolve(define.rs_root, '/assets/svgstore')
        ]
    }
);

rules.push(
    {
        test: /\.json$/,
        use: [
            {
                loader: 'json-loader', // 'file-loader'
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: '[name]-[hash:11].[ext]'
                }
            }
        ]
    }
);

rules.push(
    {
        test: /\.xml$/,
        use: [
            {
                loader: 'xml-loader',
                options: {
                    name: '[name].[ext]',
                    explicitChildren: false
                }
            }
        ]
    }
);

rules.push(
    {
        test: /\.(woff(2)?)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    },
    {
        test: /\.(ttf|eot|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ],
        include: resolve(define.rs_root, '/assets/fonts')
    }
);

rules.push(
    {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ]
    }
);

module.exports.config = rules;
