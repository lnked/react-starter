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
                            'transform-react-jsx-self',
                            'transform-react-jsx-source',
                            'transform-react-inline-elements',
                            'transform-react-constant-elements',
                            'transform-react-remove-prop-types',
                            'transform-react-pure-class-to-function',
                            'transform-es2015-template-literals',
                            'transform-es2015-literals',
                            'transform-es2015-function-name',
                            'transform-es2015-arrow-functions',
                            'transform-es2015-block-scoped-functions',
                            'transform-es2015-classes',
                            'transform-es2015-object-super',
                            'transform-es2015-shorthand-properties',
                            'transform-es2015-computed-properties',
                            'transform-es2015-for-of',
                            'transform-es2015-sticky-regex',
                            'transform-es2015-unicode-regex',
                            'check-es2015-constants',
                            'transform-es2015-spread',
                            'transform-es2015-parameters',
                            'transform-es2015-destructuring',
                            'transform-es2015-block-scoping',
                            'transform-es2015-typeof-symbol',
                            ['transform-regenerator', { async: false, asyncGenerators: false }]
                        ]
                    ]
                }
            }
        ],
        exclude: /(node_modules|bower_components)/
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
                    sourceMap: define.rs_development,
                    localIdentName: define.rs_production ? '_[hash:5]' : '[name]__[local]___[hash:base64:5]'
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
