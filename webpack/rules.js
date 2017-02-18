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
                        [
                            'es2015',
                            {
                                'modules': false
                            }
                        ],
                        'react',
                        'stage-2',
                        ...define.rs_development ? [] : [
                            'react-optimize'
                        ]
                    ],
                    plugins: [
                        'transform-runtime',
                        ...!define.rs_development ? [] : [
                            'transform-react-jsx-source',
                            'transform-react-jsx-self'
                        ]
                    ]
                }
            }
        ],
        include: define.rs_root,
        exclude: /(node_modules|bower_components)/
    }
);

rules.push(
    {
        test: /\.(css|sass|scss)$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: define.rs_development,
                    importLoaders: 1
                    // localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                }
            },
            {
                loader: 'sass-loader'
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return postcss.config;
                    }
                }
            }
        ],
        include: define.rs_root
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
                    name: '[name]-[hash].[ext]'
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
        test: /.*\.(doc(x)|xls(l))$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
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
                    name: '[name]-[hash].[ext]'
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
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ],
        include: path.resolve(define.rs_root, '/assets/fonts')
    }
);

module.exports.config = rules;
