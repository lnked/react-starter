'use strict';

const rules = [];

const define = require('./define');
const postcss = require('./postcss');

rules.push(
    {
        test: /\.js[x]?$/,
        enforce: "pre",
        loader: "eslint-loader"
    }
);

rules.push(
    {
        test: /\.pug/,
        use: ['pug-loader']
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
                        'es2015',
                        'react',
                        'stage-2',
                        ...define.rs_develop ? [] : [
                            'react-optimize'
                        ]
                    ],
                    plugins: [
                        'transform-runtime',
                        ...!define.rs_develop ? [] : [
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
                loader: 'css-loader?modules'
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
        ]
    }
);

rules.push(
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=true'
        ]
    }
);

rules.push(
    {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        use: ['file-loader']
    }
);

module.exports.config = rules;
