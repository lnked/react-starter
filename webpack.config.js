'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BowerWebpackPlugin = require('bower-webpack-plugin');

const _root_ = path.resolve(__dirname, 'app');
const _dist_ = path.resolve(__dirname, 'dist');

const isDEV = NODE_ENV === 'development';
const isPROD = NODE_ENV === 'production';

const AUTOPREFIXER_BROWSERS = !isPROD ? [] : [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9' // Doesn't support IE8
];

const plugins = [];

plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        cutCode: JSON.stringify(true)
    }),
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
    }),
    new BowerWebpackPlugin({
        modulesDirectories: ['bower_components'],
        manifestFiles: ['bower.json', '.bower.json'],
        includes: /.*/,
        excludes: /.*\.less$/
    })
);

if (isPROD) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
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

const postcss = [];

postcss.push(
    require('postcss-bem-linter'),
    // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
    // https://github.com/jonathantneal/postcss-partial-import
    require('postcss-partial-import')(),
    // Allow you to fix url() according to postcss to and/or from options
    // https://github.com/postcss/postcss-url
    require('postcss-url')(),
    // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
    // https://github.com/postcss/postcss-custom-properties
    require('postcss-custom-properties')(),
    // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
    // https://github.com/postcss/postcss-custom-media
    require('postcss-custom-media')(),
    // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
    // https://github.com/postcss/postcss-media-minmax
    require('postcss-media-minmax')(),
    // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
    // https://github.com/postcss/postcss-custom-selectors
    require('postcss-custom-selectors')(),
    // W3C calc() function, e.g. div { height: calc(100px - 2em); }
    // https://github.com/postcss/postcss-calc
    require('postcss-calc')(),
    // Allows you to nest one style rule inside another
    // https://github.com/jonathantneal/postcss-nesting
    require('postcss-nesting')(),
    // Unwraps nested rules like how Sass does it
    // https://github.com/postcss/postcss-nested
    require('postcss-nested')(),
    // W3C color() function, e.g. div { background: color(red alpha(90%)); }
    // https://github.com/postcss/postcss-color-function
    require('postcss-color-function')(),
    // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
    // https://github.com/iamvdo/pleeease-filters
    require('pleeease-filters')(),
    // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
    // https://github.com/robwierzbowski/node-pixrem
    require('pixrem')(),
    // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
    // https://github.com/postcss/postcss-selector-matches
    require('postcss-selector-matches')(),
    // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
    // https://github.com/postcss/postcss-selector-not
    require('postcss-selector-not')(),
    // Postcss flexbox bug fixer
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    require('postcss-flexbugs-fixes')(),
);

if (isPROD) {
    postcss.push(
        // Add vendor prefixes to CSS rules using values from caniuse.com
        // https://github.com/postcss/autoprefixer
        require('autoprefixer')({
            browsers: AUTOPREFIXER_BROWSERS
        })
    );
}

module.exports = {

    context: _root_,

    entry: {
        bundle: [_root_, 'app'].join('/'),
        // styles: [_root_, 'app.css'].join('/')
    },

    output: {
        path: _dist_,
        publicPath: '/',
        filename: 'bundle.js' // '[name].js',
    },

    watch: NODE_ENV=='development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: isDEV ? "cheap-inline-module-source-map" : (isPROD ? '#source-map' : null),

    resolve: {
        root: _root_,
        extensions: ['', '.jsx', '.js', '.json', '.scss'],
        modulesDirectories: ['node_modules', 'components', 'layouts'],
        enforceExtension: false,
        alias:{
            pages: path.resolve(_root_, 'pages'),
            utils: path.resolve(_root_, 'utils'),
            layouts: path.resolve(_root_, 'layouts'),
            containers: path.resolve(_root_, 'containers'),
            components: path.resolve(_root_, 'components')
        }
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

    postcss: postcss,

    plugins: plugins
}
