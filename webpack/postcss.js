'use strict';

const postcss = [];

const define = require('./define');
const { resolve } = require('path');

postcss.push(
    require('precss'),
    require('postcss-import')({
        root: define.rs_root,
        path: define.rs_root
    }),
    require('postcss-calc'),
    require('postcss-selector-not'),
    require('postcss-short-spacing'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-nesting'),
    require('postcss-nested'),
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
    postcss.push(
        require('postcss-will-change-transition'),
        require('postcss-will-change'),
        require('postcss-discard-comments'),
        require('postcss-color-rgba-fallback'),
        require('postcss-emptymediaqueries'),
        // require('postcss-uncss')({
        //     html: [
        //         resolve(__dirname, 'app')
        //     ]
        // }),
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

module.exports.plugins = postcss;
