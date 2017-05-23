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
        prefetch: '*.js',
        preload: '*.*',
        template: [template, 'pug'].join('.'),
        filename: resolve(define.rs_dist, [script, 'html'].join('.')),
        minify: define.rs_development ? {} : {
            keepClosingSlash: false,
            removeEmptyElements: false,
            removeComments: define.rs_production,
            conservativeCollapse: define.rs_production,
            collapseWhitespace: define.rs_production,
            removeAttributeQuotes: define.rs_production,
            removeEmptyAttributes: define.rs_production,
            removeRedundantAttributes: define.rs_production,
            removeScriptTypeAttributes: define.rs_production,
            removeStyleLinkTypeAttributes: define.rs_production,
            removeTagWhitespace: define.rs_production, // TEST MODE
            useShortDoctype: define.rs_production,
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