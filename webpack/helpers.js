'use strict';

const { resolve } = require('path');
const define = require('./define');

module.exports.generateConfig = (script, template, chunksList) => {
    if (!template) {
        template = 'app';
    }

    const config = {
        hash: false,
        cache: define.rs_production,
        inject: 'body',
        filetype: 'pug',
        template: [template, 'pug'].join('.'),
        filename: resolve(define.rs_dist, [script, 'html'].join('.')),
        minify: define.rs_development ? {} : {
            removeComments: define.rs_production,
            collapseWhitespace: define.rs_production,
            removeRedundantAttributes: define.rs_production,
            useShortDoctype: define.rs_production,
            removeEmptyAttributes: define.rs_production,
            removeStyleLinkTypeAttributes: define.rs_production,
            keepClosingSlash: define.rs_production,
            minifyJS: define.rs_production,
            minifyCSS: define.rs_production,
            minifyURLs: define.rs_production
        }
    }

    if (chunksList !== undefined) {
        config.chunks = chunksList;
    }

    return config;
}