'use strict';

const rules = [];

const path = require('path');
const define = require('./define');
const postcss = require('./postcss');

rules.push(
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/
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
        test: /\.pug/,
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
                        [
                            "es2015", {
                                "loose": true,
                                "modules": false
                            }
                        ],
                        "stage-0",
                        ...define.rs_development ? [] : [
                            "react-optimize"
                        ]
                    ],
                    plugins: [
                        "transform-react-jsx",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        ...define.rs_development ? [
                            ["transform-runtime", {
                                "helpers": false, // defaults to true
                                "polyfill": false, // defaults to true
                                "regenerator": true, // defaults to true
                                "moduleName": "babel-runtime" // defaults to "babel-runtime"
                            }]
                        ] : []
                    ],
                    cacheDirectory: true
                }
            }
        ],
        include: [
            define.rs_root
        ],
        exclude: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../bower_components")
        ]
        // exclude: /(node_modules|bower_components)/
    }
);

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
                    localIdentName: define.rs_production ? '_[hash:5]' : '[name]-[local]-[hash:base64:5]'
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
                loader: 'sass-loader'
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
        include: define.rs_root,
        exclude: /node_modules/
    }
);

rules.push(
    {
        test: /.*\.(gif|ico|png|jpe?g|svg)$/i,
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
                        quality: "65-90",
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: true,
                    },
                    optipng: {
                        optimizationLevel: 7
                    },
                    svgo: {
                        plugins: [
                            {removeTitle:true},
                            {removeEmptyAttrs:false},
                            {removeDesc:true},
                            {removeViewBox:false},
                            {convertPathData:false},
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
        exclude: /node_modules/
    }
);

rules.push(
    {
        test: /\.json$/,
        use: [
            {
                loader: 'file-loader', // 'json-loader',
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
        test: /\.(eot|otf|webp|svg|ttf|woff(2)?)(\?.*)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ],
        include: path.resolve(define.rs_root, '/assets/fonts')
    }
);

rules.push(
    {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'
                }
            }
        ]
    }
);

module.exports.config = rules;
