'use strict';

const path = require('path');
const webpack = require('webpack');
const args = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const _root_ = path.resolve(__dirname, 'app');
const _dist_ = path.resolve(__dirname, 'dist');

const isProd = args.prod;

const AUTOPREFIXER_BROWSERS = !isProd ? [] : [
    'last 2 version',
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 5',
    'opera >= 12.1',
    'ios >= 6',
    'android >= 2.3',
    'bb >= 10'
];

const plugins = [];

plugins.push(
    new HtmlWebpackPlugin({
        minimize: true,
        filename: 'index.html',
        template: 'app.html'
    }),
    new ExtractTextPlugin('[name].[hash].css', {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        minimize: true,
        filename: 'index.html',
        template: 'app.html'
    })
);

if (isProd) {
    plugins.push(
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            cutCode: JSON.stringify(true)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    );
}
        
module.exports = {

    context: _root_,

    entry: {
        bundle: [_root_, 'app'].join('/'),
        // styles: [_root_, 'app.css'].join('/')
    },

    devtool: 'source-map', //'eval', 'sourcemap'

    output: {
        path: _dist_,
        publicPath: '/',
        filename: 'bundle.js' // '[name].js',
    },

    resolve: {
        root: _root_,
        extensions: ['', '.jsx', '.js', '.scss'],
        modulesDirectories: ['node_modules', 'components']
        // alias: {
        //     'css': join(client, 'styles'),
        //     'containers': join(client, 'containers'),
        //     'components': join(client, 'components'),
        //     'utils': join(client, 'utils')
        // }
    },

    resolveLoader: {
        root: path.join(_root_, 'node_modules')
    },

    devServer: {
        historyApiFallback: true
    },
    
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                include: _root_,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2']
                } 
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
        ]
    },

    postcss: [
        require('postcss-import')({
            path: ['node_modules', './app']
        }),
        require('autoprefixer')({
            browsers: AUTOPREFIXER_BROWSERS
        }),
        require('postcss-bem-linter'),
        require('postcss-color-rebeccapurple'),
        require('postcss-custom-properties')
    ],

    plugins: plugins
}
