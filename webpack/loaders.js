'use strict';

export default [
    {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: _root_,
        exclude: /(node_modules|bower_components)/,
        query: {
            babelrc: false,
            cacheDirectory: isDevelop,
            presets: [
                'es2015',
                'react',
                'stage-0',
                'stage-1',
                'stage-2',
                ...isDevelop ? [] : [
                    'react-optimize'
                ]
            ],
            plugins: [
                'transform-runtime',
                ...!isDevelop ? [] : [
                    'transform-react-jsx-source',
                    'transform-react-jsx-self'
                ]
            ]
        }
    },
    {
        test: /\.(pug|jade)/,
        loader: 'pug-html-loader'
    },
    {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader')
    },

    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=true'
        ]
    },
    {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
    }
];
