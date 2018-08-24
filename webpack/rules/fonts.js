const { resolve } = require('path')
const define = require('../define')
const name = define.rs_development ? '[path][name].[ext]?[hash:8]' : '[hash:4].[ext]'

const rules = [
    {
        test: /\.(wof{2}(2)?)(\?v=(?:\d+\.){2}\d+)?$/,
        use: {
            loader: 'url-loader',
            options: {
                name,
                // Limit at 25k. Above that it emits separate files
                limit: 25 * 1024,
                // url-loader sets mimetype if it's passed.
                // Without this it derives it from the file extension
                mimetype: 'application/font-woff',
                // Output below fonts directory
                // name: "./fonts/[name].[ext]",
                outputPath: 'fonts/',
            },
        },
        include: resolve(define.rs_root, '../src/assets/fonts'),
    },
    {
        test: /\.t{2}f(\?v=(?:\d+\.){2}\d+)?$/,
        loader: 'url-loader',
        options: {
            name,
            limit: 10 * 1024,
            mimetype: 'application/octet-stream',
            outputPath: 'fonts/',
        },
        include: resolve(define.rs_root, '../src/assets/fonts'),
    },
    {
        test: /\.(eot|otf)(\?v=(?:\d+\.){2}\d+)?$/,
        loader: 'file-loader',
        options: {
            name,
            outputPath: 'fonts/',
        },
        include: resolve(define.rs_root, '../src/assets/fonts'),
    },
    {
        test: /\.svg(\?v=(?:\d+\.){2}\d+)?$/,
        loader: 'url-loader',
        options: {
            name,
            limit: 10 * 1024,
            mimetype: 'image/svg+xml',
            outputPath: 'fonts/',
        },
        include: resolve(define.rs_root, '../src/assets/fonts'),
    },
]

module.exports.config = rules
