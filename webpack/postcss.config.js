'use strict';

const define = require('./define');
const path = require('path');

const webpack = require('webpack');
// const resolver = require('postcss-import-resolver')

const plugins = [];

plugins.push(
    require('precss'),
    // require('postcss-easy-import')({
    //     prefix: '_'
    // }),
    require('postcss-import')({
        addDependencyTo: webpack,
        path: [
            define.rs_root,
            path.resolve(define.rs_root, 'assets/styles')
        ],
        // resolve: resolver({
        //     alias: {
        //       '~': 'src/'
        //     }
        // })
    }),
    require('postcss-nested'),
    require('postcss-calc'),
    require('postcss-selector-not'),
    require('postcss-short-spacing'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nesting'),
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
    require('pleeease-filters'),
    require("postcss-cssnext")({
        autoprefixer: false,
        warnForDuplicates: false
    }),
    require('css-mqpacker'),
    require('pixrem')({
        rootValue: 10
    }),
    require('postcss-reporter')({
        clearReportedMessages: true
    })
);

if (define.rs_production) {
    plugins.push(
        require('postcss-will-change-transition'),
        require('postcss-will-change'),
        require('postcss-discard-comments'),
        require('postcss-color-rgba-fallback'),
        require('postcss-emptymediaqueries'),
        require('cssnano')({
            safe: true,
            calc: false,
            zindex: false,
            sourcemap: true,
            autoprefixer: false,
            normalizeCharset: true,
            convertValues: { length: false },
            colormin: true
        }),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            flexbox: 'no-2009'
        })
    );
}

module.exports = ({ file, options, env }) => ({
    // parser: file.extname === '.sss' ? 'sugarss' : 'postcss-scss',
    plugins: plugins
})
