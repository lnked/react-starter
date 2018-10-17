const path = require('path')
const { join, resolve } = require('path')

const webpack = require('webpack')
const define = require('../define')
const helpers = require('../helpers')
const scripts = require('../rules/scripts')
const environment = require('../environment').config
const formatter = require('../environment').formatter

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CssUrlRelativePlugin = require('css-url-relative-plugin')
const HtmlWebpackPolyfillIOPlugin = require('html-webpack-polyfill-io-plugin2')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const HappyPack = require('happypack')

// const layouts = {};

// glob.sync(`${basePath}/src/layouts/*.?(pug|jade)`).forEach((item) => {
//     layouts.plugins.push(
//         new HtmlWebpackPlugin(helpers.generateConfig(item, 'app', 'bundle'))
//     );
// });

const cacheDirectory = join(define.rs_cachePath, `/hard-source/${define.rs_environment}/[confighash]`);

const plugins = [
    new ProgressBarPlugin(),

    new webpack.DefinePlugin({
        'process.env': Object.assign(formatter(environment, true), {
            BROWSER: true,
        }),
        'process.env.NODE_ENV': JSON.stringify(define.rs_mode),
        'process.env.BABEL_ENV': JSON.stringify(define.rs_mode),
        __DEV__: define.rs_development,
        __PROD__: define.rs_production,
    }),

    new HardSourceWebpackPlugin({
        cacheDirectory,
        configHash: (webpackConfig) => require('node-object-hash')({sort: false}).hash(webpackConfig),
        environmentHash: {
            root: process.cwd(),
            files: ['package-lock.json', 'npm-shrinkwrap.json', 'yarn.lock'],
            directories: ['node_modules'],
        },
        info: {
            mode: 'none',
            level: 'debug',
        },
        cachePrune: {
            // Caches younger than `maxAge` are not considered for deletion. They must
            // be at least this (default: 2 days) old in milliseconds.
            maxAge: 2 * 24 * 60 * 60 * 1000,
            // All caches together must be larger than `sizeThreshold` before any
            // caches will be deleted. Together they must be at least this
            // (default: 50 MB) big in bytes.
            sizeThreshold: 50 * 1024 * 1024
        },
    }),

    // new webpack.DllReferencePlugin({
    //     manifest: require(path.join(resolve(define.rs_dist, 'dll'), 'bundle-manifest.json')),
    // }),

    // /(en-gb|en|ru)/
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/(ru)$/),

    new webpack.LoaderOptionsPlugin({
        debug: define.rs_development,
        minimize: define.rs_production,
        options: {},
    }),

    new HtmlWebpackPlugin(helpers.generateConfig('index', 'app', 'bundle')),

    new SvgSpriteHtmlWebpackPlugin({
        includeFiles: [ './src/assets/svgstore/*.svg' ],
        generateSymbolId (svgFilePath) {
            return path
                .basename(svgFilePath)
                .replace(/\.svg/gi, '')
                .toString()
        },
    }),

    new HtmlWebpackPolyfillIOPlugin({
        minify: define.rs_production,
        // features: [
        //     'Intl',
        //     'Map',
        //     'Set',
        //     'Array.isArray',
        //     'Array.prototype.find',
        //     'Array.prototype.some',
        //     'Object.assign',
        //     'Promise',
        // ],
        // flags: 'always', // Include all specified features regardless of user-agent
        // unknown: 'polyfill', // Polyfill all listed features if user-agent is unkown
        // callback: 'polyfillHasLoaded',
        // rum: true // Allow real-user monitoring
    }),

    new HtmlWebpackHarddiskPlugin(),

    new CssUrlRelativePlugin({
        importLoaders: 3,
        modules: true,
        camelCase: true,
        sourceMap: define.rs_sourceMap,
        minimize: define.rs_production,
        localIdentName: define.rs_development ? '[path][name]__[local]--[hash:base64:5]' : '[sha1:hash:hex:4]',
    }),

    new MiniCssExtractPlugin({
        filename: define.rs_production ? 'css/[name].[contenthash:4].css' : '[name].css',
        chunkFilename: define.rs_production ? '[id].[hash:3].css' : '[id].css',
    }),

    new ScriptExtHtmlWebpackPlugin({
        defer: [/vendors/, /bundle/, /.*bundle/],
        inline: 'startup',
        defaultAttribute: 'async',
    }),

    new CopyWebpackPlugin(
        [
            {
                context: `assets/public-${define.rs_environment}`,
                from: { glob: '**/*', dot: true },
                to: define.rs_dist,
                force: true,
                cache: true,
            },
            {
                context: 'assets/public',
                from: { glob: '**/*', dot: true },
                to: define.rs_dist,
                force: true,
                cache: true,
            },
            {
                context: 'assets/images',
                from: { glob: '**/*', dot: true },
                to: resolve(define.rs_dist, 'img'),
                force: true,
                cache: true,
            },
            {
                context: 'assets/fonts/SF',
                from: { glob: '**/*', dot: true },
                to: resolve(define.rs_dist, 'assets/fonts/SF'),
                force: true,
                cache: true,
            },
        ],
        {
            ignore: ['.cache', '.gitkeep', '.DS_Store', '*.js', '*.css'],
            copyUnmodified: true,
        }
    ),
]

if (define.rs_parallel) {
    plugins.push(
        new HappyPack({
            loaders: scripts.loaders,
            threads: define.rs_parallel,
            verbose: false,
        })
    )
}

module.exports.config = plugins
