const define = require('./define')

module.exports = {
    minimize: true,
    concatenateModules: true,
    runtimeChunk: {
        name: 'startup',
    },
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            bundle: {
                test: /[/\\]node_modules[/\\]/,
                name: 'bundle',
                minChunks: 1,
                priority: -10,
                chunks: 'all',
                enforce: true,
                reuseExistingChunk: true,
            },
            'default': {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
        },
    },
}
