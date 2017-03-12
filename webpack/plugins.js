'use strict';

const plugins = [];

const { resolve } = require('path');

const webpack = require('webpack');
const define = require('./define');

const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const WebpackChunkHash = require('webpack-chunk-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

// const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
// const ClosureCompilerPlugin = require('closure-compiler-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

const SplitByPathPlugin = require('split-by-path-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

if (define.rs_development) {
    plugins.push(
        new LiveReloadPlugin()
    );
}

plugins.push(
    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.DEBUG': JSON.stringify(false)
    }),
    new HtmlWebpackPlugin({
        hash: false,
        cache: define.rs_production,
        inject: 'body',
        filetype: 'pug',
        template: 'app.pug',
        filename: resolve(define.rs_dist, 'index.html'),
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
        }
    }),
    new ExtractTextPlugin({
        filename: define.rs_production ? '[name].[hash].css' : '[name].css',
        allChunks: define.rs_production
    }),
    new ScriptExtHtmlWebpackPlugin({
        async: /\.js$/,
        preload: {
            test: /\.js$/,
            chunks: 'async'
        }
    }),
    new CopyWebpackPlugin([
        // { from: 'assets/fonts', to: 'fonts' },
        { from: 'assets/images', to: 'images' }
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
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash:5].js',
            // minChunks: (module) => {
            //     return module.context && module.context.includes("node_modules");
            // }
            minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime",
            minChunks: Infinity
        }),
        new webpack.ContextReplacementPlugin(
            /moment[\/\\]locale$/,
            /(en-gb|ru)\.js/
        ),
        // new SplitByPathPlugin({
        //     buckets: [{
        //         name: 'common',
        //         regex: /node_modules/,
        //         // regex: /(node_modules\/|app\/common\/)/
        //     }]
        // }),
        new WebpackCleanupPlugin({
            quiet: true,
            exclude: ["chunk-manifest.json", "fonts/**/*"]
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: false,
                side_effects: false,
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
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
                unsafe_comps: true,
                screw_ie8: true,
                pure_getters: true
            },
            mangle: {
                sort: true,
                eval: true,
                toplevel: true,
                properties: true
            },
            output: {
                comments: false,
                beautify: false,
                space_colon: false
            },
            exclude: [/\.min\.js$/gi]
        }),
        new FaviconsWebpackPlugin({
            logo: 'assets/favicon/favicon.svg',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'fav-[hash:8]/',
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
        // new ClosureCompilerPlugin({
        //     // compilation_level: 'ADVANCED',
        //     // create_source_map: false
        //     compiler: {
        //         language_in: 'ECMASCRIPT6',
        //         language_out: 'ECMASCRIPT5',
        //         compilation_level: 'ADVANCED'
        //     },
        //     concurrency: 3
        // }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

// import reactRouterToArray from 'react-router-to-array';

// new StaticSiteGeneratorPlugin({
//   paths: [
//     '/hello/',
//     '/world/'
//   ],
//   locals: {
//     // Properties here are merged into `locals` 
//     // passed to the exported render function 
//     greet: 'Hello'
//   }
// })

module.exports.config = plugins;
