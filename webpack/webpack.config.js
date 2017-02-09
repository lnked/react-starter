'use strict';

const path = require('path');
const webpack = require('webpack');
const argv = require('minimist')(process.argv.slice(2));

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const _root_ = path.resolve(__dirname, '../app');
const _dist_ = path.resolve(__dirname, '../dist');

const isDevelop = argv.env === 'develop' || argv.env !== 'release';
const isRelease = argv.env === 'release';

// const postcss = require('./postcss');
// const plugins = require('./plugins');
// const loaders = require('./loaders');

console.log( path.resolve(__dirname) );

module.exports = {
    
    context: _root_,

    entry: './app/test',
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};

// module.exports = {

//     context: _root_,

//     entry: {
//         bundle: [_root_, 'app.pug'].join('/'),
//         styles: [_root_, 'app.scss'].join('/')
//     },

//     output: {
//         path: _dist_,
//         publicPath: '/',
//         // filename: 'bundle.js' // '[name].js',
//         filename: '[name].js' // '[name].js',
//     },

//     watch: isDevelop,

//     watchOptions: {
//         aggregateTimeout: 100
//     },

//     devtool: isRelease ? 'source-map' : null,

//     resolve: {
//         root: _root_,
//         extensions: ['', '.jsx', '.js', '.json', '.scss'],
//         modulesDirectories: ['node_modules', 'components', 'layouts'],
//         enforceExtension: false,
//         alias:{
//             pages: path.resolve(_root_, 'pages'),
//             utils: path.resolve(_root_, 'utils'),
//             layouts: path.resolve(_root_, 'layouts'),
//             containers: path.resolve(_root_, 'containers'),
//             components: path.resolve(_root_, 'components')
//         }
//     },

//     resolveLoader: {
//         root: path.join(_root_, 'node_modules')
//     },

//     devServer: {
//         contentBase: _dist_,
//         historyApiFallback: true,
//         watchContentBase: isDevelop,
//         clientLogLevel: "info",
//         stats: {
//             modules: false,
//             cached: false,
//             colors: true,
//             chunk: false
//         },
//         // hot: isDevelop,
//         compress: isRelease,
//         host: '0.0.0.0',
//         port: 7777,
//         lazy: true
//     },

//     module: {
//         preLoaders: [
//             {
//                 test: /\.(js|jsx)?$/,
//                 loader: 'eslint',
//                 exclude: /node_modules/
//             }
//         ],
//         loaders: loaders
//     },

//     bail: !isDevelop,

//     cache: isDevelop,

//     debug: isDevelop,

//     stats: {
//         colors: true,
//         reasons: isDevelop,
//         hash: isRelease,
//         version: isRelease,
//         timings: true,
//         chunks: isRelease,
//         chunkModules: isRelease,
//         cached: isRelease,
//         cachedAssets: isRelease,
//     },

//     postcss: postcss,

//     plugins: plugins
// }
