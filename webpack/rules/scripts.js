const { join, resolve } = require('path')

const define = require('../define')

const tsConfig = []
const jsConfig = []

jsConfig.push({
    loader: 'cache-loader',
    options: {
        cacheDirectory: join(define.rs_cachePath, '/cache-loader'),
    },
})

jsConfig.push({
    loader: 'babel-loader',
    options: {
        envName: process.env.BABEL_ENV || process.env.NODE_ENV || 'development',
        configFile: resolve(define.rs_base, 'babel.config.js'),
        compact: define.rs_production,
        cacheDirectory: join(define.rs_cachePath, '/babel'),
    },
})

tsConfig.push({
    loader: 'awesome-typescript-loader',
    options: {
        useBabel: false,
        useCache: false,
        forkChecker: true,
        happyPackMode: !!define.rs_parallel,
        transpileOnly: true,
        useWebpackText: true,
        errorsAsWarnings: true,
        useTranspileModule: true,
        forceIsolatedModules: false,
        configFileName: resolve(define.rs_base, 'tsconfig.json'),
    },
})

const rules = [
    {
        enforce: 'pre',
        test: define.rs_regexp_scripts,
        options: {
            fix: false,
        },
        loader: 'eslint-loader',
        include: define.rs_root,
    },
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        options: {
            fix: false,
        },
        loader: 'tslint-loader',
        include: define.rs_root,
    },
    {
        enforce: 'pre',
        test: /\.([jt])sx?$/,
        loader: 'source-map-loader',
        exclude: /(node_modules|bower_components)/,
    },
    {
        test: define.rs_regexp_scripts,
        include: resolve('src'),
        exclude: /(node_modules|bower_components)/,
        use: define.rs_parallel ? 'happypack/loader' : jsConfig,
    },
    {
        test: /\.tsx?$/,
        // exclude: [/(node_modules|bower_components)/, /\.(spec|e2e)\.ts(x?)$/],
        // exclude: [/(node_modules|bower_components)/],
        use: [...jsConfig, ...tsConfig],
    },
]

module.exports.config = rules
module.exports.loaders = jsConfig
