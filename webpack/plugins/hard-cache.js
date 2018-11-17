const { join, resolve } = require('path')

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const define = require('../define')

const cacheDirectory = join(define.rs_cachePath, `/hard-source/${define.rs_environment}/[confighash]`)

const plugins = [
    new HardSourceWebpackPlugin({
        cacheDirectory,
        configHash: (webpackConfig) => (
            require('node-object-hash')({
                sort: false
            }).hash(webpackConfig)
        ),
        environmentHash: {
            root: process.cwd(),
            files: ['yarn.lock', 'package-lock.json', 'npm-shrinkwrap.json'],
            directories: ['node_modules'],
        },
        // info: {
        //     mode: 'none',
        //     level: 'debug',
        // },
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
]

module.exports.config = plugins
