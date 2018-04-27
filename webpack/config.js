'use strict';

const { resolve } = require('path');

const webpack = require('webpack');

const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const entryPoint = require('./entry-point');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

process.traceDeprecation = true;

module.exports = {

    context: define.rs_root,

    target: define.rs_target,

    entry: entryPoint.config,

    output: {
        path: resolve(define.rs_dist, 'assets'),
        pathinfo: define.rs_development,
        publicPath: define.rs_output_path,
        filename: define.rs_production ? 'js/[name].[chunkhash:5].js' : '[name].js',
        chunkFilename: define.rs_production ? 'js/[name].[chunkhash:5].chunk.js' : '[name].chunk.js',
        jsonpFunction: 'WJ',
        hotUpdateFunction: 'UF'
    },

    resolve: {
        symlinks: true,
        modules: ['node_modules', define.rs_root],
        mainFiles: ['index'],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            src: define.rs_root,
            hocs: resolve(define.rs_root, 'hocs'),
            utils: resolve(define.rs_root, 'utils'),
            typings: resolve(define.rs_root, 'typings'),
            assets: resolve(define.rs_root, 'assets'),
            config: resolve(define.rs_root, 'config'),
            layouts: resolve(define.rs_root, 'layouts'),
            segments: resolve(define.rs_root, 'segments'),
            variables: resolve(define.rs_root, 'variables'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            styles: resolve(define.rs_root, 'assets/styles'),
            scripts: resolve(define.rs_root, 'assets/scripts'),
            svgstore: resolve(define.rs_root, 'assets/svgstore')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        strictExportPresence: define.rs_development,

        rules: rules.config,
        unsafeCache: define.rs_development,
        noParse: [
            /[\/\\]react[\/\\]react\.js[\/\\]jquery[\/\\]zepto\.js$/
        ]
    },

    optimization: {
        minimize: define.rs_production,
        concatenateModules: define.rs_production,
        noEmitOnErrors: true,
        namedModules: true,
        namedChunks: true,
        runtimeChunk: {
            name: 'startup'
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: require('os').cpus().length,
                sourceMap: !define.rs_release,
                uglifyOptions: {
                    ie8: false,
                    mangle: true,
                    toplevel: false,
                    parse: {
                        html5_comments: false
                    },
                    compress: {
                        unused: true,
                        booleans: true,
                        warnings: false,
                        dead_code: true,
                        drop_console: define.rs_release,
                        drop_debugger: define.rs_release,
                        global_defs: {
                            DEBUG: false
                        }
                    },
                    output: {
                        ecma: 8,
                        comments: false,
                        beautify: false,
                        indent_level: 0
                    },
                    compressor: {
                        warnings: false
                    }
                }
            })
        ],
        splitChunks: {
            name: true,
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minChunks: 2,
                    chunks: 'all',
                    enforce: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },

    plugins: plugins.config
};
