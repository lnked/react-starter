'use strict';

const postcss = [];

const define = require('./define');

postcss.push(
    require('precss'),
    require('postcss-import')({
        root: define.rs_root,
        path: define.rs_root
    }),
    require('postcss-url'),
    require('postcss-hexrgba'),
    require('postcss-position'),
    require('postcss-quantity-queries'),
    require("postcss-cssnext")({
        autoprefixer: false
    }),
    require('pixrem')({
        rootValue: 10
    }),
    require('postcss-calc'),
    require('postcss-reporter')({
        clearReportedMessages: true
    })
);

if (define.rs_production) {
    postcss.push(
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
        })
    );
}

module.exports.plugins = postcss;
