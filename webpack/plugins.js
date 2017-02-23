'use strict';

const plugins = [];

const path = require('path');
const webpack = require('webpack');
const define = require('./define');

const FaviconsPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

if (define.rs_development) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': define.rs_production ? "'production'" : "'development'"
    }),
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new HtmlWebpackPlugin({
        hash        : false,
        minify: define.rs_development ? {} : {
            removeComments: define.rs_production,
            collapseWhitespace: define.rs_production,
            removeRedundantAttributes: define.rs_production,
            useShortDoctype: define.rs_production,
            removeEmptyAttributes: define.rs_production,
            removeStyleLinkTypeAttributes: define.rs_production,
            keepClosingSlash: define.rs_production,
            minifyJS: define.rs_production,
            minifyCSS: define.rs_production,
            minifyURLs: define.rs_production
        },
        cache       : define.rs_production,
        inject      : 'body',
        filetype    : 'pug',
        template    : 'app.pug',
        filename    : 'index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
        async: /\.js$/,
        preload: {
            test: /\.js$/,
            chunks: 'async'
        }
    }),
    new CopyWebpackPlugin([
        { from: 'assets/scripts', to: 'js' },
        { from: 'assets/styles/', to: 'css' },
        { from: 'assets/images', to: 'images' },
        { from: '../node_modules/babel-polyfill/dist/polyfill.min.js', to: 'js/polyfill.js' }
    ])
);

if (define.rs_development) {
    plugins.push(
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: false
        })
    );
}

if (define.rs_production) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChuncs: 2
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                // drop_console: true,
                // side_effects: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
                unsafe_comps    : true,
                screw_ie8       : true,
                pure_getters    : true
            },
            mangle: {
                toplevel: true,
                sort: true,
                eval: true,
                properties: true
            },
            output: {
                comments: false,
                beautify: false,
                space_colon: false
            },
            exclude: [/\.min\.js$/gi]
        }),
        new FaviconsPlugin({
            logo: 'assets/favicon/favicon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash:8]/',
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'iconstats-[hash].json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#222222',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'React starter',
            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        // new SvgStore(path.resolve(define.rs_root, 'assets/svgstore/**/*.svg'), path.join(define.rs_dist, 'svg'), {
        //     name: '[hash].sprite.svg',
        //     chunk: 'app',
        //     prefix: 'icon-',
        //     svgoOptions: {
        //         plugins: [
        //             { removeTitle: true }
        //         ]
        //     }
        // }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

module.exports.config = plugins;

// console.log(path.resolve(define.rs_root, 'assets/svgstore/**/*.svg'));

// <svg class="svg-icon">
// <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-name"></use>
// </svg>
// new SvgStore(path.join(sourcePath, 'svg', '**/*.svg'), path.join(distPath, 'svg'), {
//   name: '[hash].sprite.svg',
//   chunk: 'app',
//   baseUrl: '//path-to-cdn:port/'
//   prefix: 'myprefix-',
//   svgoOptions: {
//     // options for svgo, optional
//   }
// })


// var __svg__           = { path: './assets/svg/**/*.svg', name: 'assets/svg/[hash].logos.svg' };
// // will overwrite to var __svg__ = { filename: "assets/svg/1466687804854.logos.svg" }; 
 
// // also you can use next variables for sprite compile 
// // var __sprite__     = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].icons.svg' }; 
// // var __svgstore__   = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].stuff.svg' }; 
// // var __svgsprite__  = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].1logos.svg' }; 
 
// // require basic or custom sprite loader 
// require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
