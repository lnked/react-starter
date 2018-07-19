
'use strict';

const define = require('./define');

module.exports = {
    minimize: true,
    sideEffects: true,
    noEmitOnErrors: true,
    concatenateModules: true,
    runtimeChunk: {
        name: 'startup'
    },
    splitChunks: {
        name: true,
        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        // maxSize: 50000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        cacheGroups: {
            default: false,
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: false
            },
            polyfill: {
                test: /core-js/,
                reuseExistingChunk: false,
                priority: 10
            },
            styles: {
                name: 'styles',
                test: /\.s?css$/,
                chunks: 'all',
                minChunks: 1,
                reuseExistingChunk: true,
                enforce: true
            },
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'commons',
                minChunks: 2,
                chunks: 'initial',
                enforce: true,
                reuseExistingChunk: false
            },
            bundle: {
                // test: /[\\/]node_modules[\\/]/,
                // priority: -10
                name: 'commons',
                chunks: 'all',
                minChunks: 3,
                reuseExistingChunk: false,
            }
        }
    }
};
