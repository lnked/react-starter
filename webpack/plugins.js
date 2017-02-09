'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelop = process.argv.includes('--develop') || !process.argv.includes('--release');
const isRelease = process.argv.includes('--release');

const plugins = [];

plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        __PROD__: isRelease,
        __API_HOST__: isDevelop ? JSON.stringify('http://0.0.0.1:7777') : isRelease ? JSON.stringify('') : JSON.stringify('http://site.dev')
    }),
    new ExtractTextPlugin(isRelease ? '[name].[hash].css' : '[name].css', {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        filetype: 'pug',
        minimize: isDevelop,
        template: 'app.pug',
        filename: 'index.html'
        // chunks: ['app', 'vendor'],
        // favicon: 'source/app/assets/img/favicon_32.png',
        // appName: appName
    }),
    new BowerWebpackPlugin({
        modulesDirectories: ['bower_components'],
        manifestFiles: ['bower.json', '.bower.json'],
        includes: /.*/,
        excludes: /.*\.(less|scss|css)$/
    }),
    new CopyWebpackPlugin([
        { from: 'assets/scripts', to: 'js' },
        { from: 'assets/images', to: 'images' },
        { from: 'assets/favicon/', to: 'favicon' }
    ]),
    new webpack.HotModuleReplacementPlugin()
);

if (isRelease) {
    plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChuncs: 3,
            // name: 'vendor'
        }),
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
            mangle: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

export default plugins;
