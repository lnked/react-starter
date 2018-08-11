
'use strict';

const define = require('./define');

module.exports = {
    minimize: true,
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
            // default: false,
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            },
            bundle: {
                test: /[\\/]node_modules[\\/]/,
                name: 'bundle',
                minChunks: 1,
                priority: 1,
                chunks: 'all',
                enforce: true,
                reuseExistingChunk: true
            },
            // polyfill: {
            //     test: /core-js/,
            //     reuseExistingChunk: true,
            //     priority: 10
            // },
            // styles: {
            //     name: 'styles',
            //     test: /\.s?css$/,
            //     chunks: 'all',
            //     minChunks: 1,
            //     // reuseExistingChunk: true,
            //     // enforce: true
            // },
            // bundle: {
            //     // test: /[\\/]node_modules[\\/]/,
            //     // priority: -10
            //     name: 'bundle',
            //     chunks: 'all',
            //     minChunks: 3,
            //     reuseExistingChunk: true
            // },
        }
    }
};
