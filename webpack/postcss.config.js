const define = require('./define')
const path = require('path')

const webpack = require('webpack')
const resolver = require('postcss-import-resolver')

const plugins = []

plugins.push(
    // require('precss'),
    require('postcss-import')({
        addDependencyTo: webpack,
        path: [define.rs_root, path.resolve(define.rs_root, 'assets/styles')],
        resolve: resolver({
            alias: {
              '~': 'src/',
              'styles': 'src/assets/styles/'
            }
        })
    }),
    require('postcss-nested'),
    require('postcss-nesting'),
    require('postcss-calc'),
    require('postcss-selector-not'),
    require('postcss-short-spacing'),
    require('postcss-simple-vars'),
    require('postcss-conditionals'),
    require('postcss-mixins'),
    require('postcss-selector-matches'),
    require('postcss-custom-properties'),
    require('postcss-custom-selectors'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-url'),
    require('postcss-hexrgba'),
    require('postcss-position'),
    require('postcss-mq-keyframes'),
    require('postcss-quantity-queries'),
    require('postcss-normalize-positions'),
    require('postcss-normalize-repeat-style'),
    require('postcss-normalize-string'),
    require('postcss-normalize-timing-functions'),
    require('postcss-normalize-whitespace'),
    require('postcss-normalize-unicode'),
    require('postcss-reduce-transforms'),
    require('postcss-unique-selectors'),
    require('pleeease-filters'),
    require('postcss-cssnext')({
        autoprefixer: false,
        warnForDuplicates: false,
    }),
    require('css-mqpacker'),
    require('pixrem')({
        rootValue: 10,
    }),
    require('postcss-reporter')({
        clearReportedMessages: true,
    })
)

if (define.rs_production) {
    plugins.push(
        require('postcss-will-change-transition'),
        require('postcss-will-change'),
        require('postcss-discard-comments'),
        require('postcss-discard-empty'),
        require('postcss-discard-duplicates'),
        require('postcss-discard-overridden'),
        require('postcss-merge-longhand'),
        require('postcss-merge-rules'),
        require('postcss-color-rgba-fallback'),
        require('postcss-reduce-idents'),
        require('postcss-minify-font-values'),
        require('postcss-minify-gradients'),
        require('postcss-minify-params'),
        require('postcss-minify-selectors'),
        require('postcss-emptymediaqueries'),
        require('cssnano')({
            safe: true,
            calc: false,
            zindex: false,
            sourcemap: true,
            autoprefixer: false,
            normalizeCharset: true,
            convertValues: { length: false },
            colormin: true,
        }),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            flexbox: 'no-2009',
        })
    )
}

module.exports = ({ file, options, env }) => ({
    // parser: require('postcss-sass'),
    // syntax: require('postcss-sass'),
    plugins,
})
