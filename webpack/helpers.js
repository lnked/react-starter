'use strict';

const fs = require('fs');
const define = require('./define');
const { resolve } = require('path');

const config = {
    hash: false,
    cache: define.rs_production,
    inject: true,
    // compile: false,
    filetype: 'pug',
    prefetch: ['**/*.chunk.js'],
    preload: ['**/*.chunk.js'],
    chunksSortMode: 'dependency',
    production: define.rs_production,
    minify: define.rs_release && {
        caseSensitive: true,
        keepClosingSlash: true,
        removeComments: true,
        decodeEntities: true,
        customAttrAssign: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        preventAttributesEscaping: true,
        processConditionalComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    }
}

const fileContent = function (filePath) {
    const content = fs.readFileSync(resolve(define.rs_base, filePath), 'utf8');
    return content.toString().replace(/<svg.*?>|<\/svg>/gi, '');
}

module.exports.fileContent = fileContent

module.exports.generateConfig = (script, template, chunksList) => {
    if (!template) {
        template = 'app';
    }

    config.template = [template, 'pug'].join('.');
    config.filename = resolve(define.rs_dist, [script, 'html'].join('.'));
    // config.svgContext = fileContent('.cache/svgstore/svgstore.svg');

    config.basePath = define.rs_output_path;

    if (chunksList !== undefined) {
        config.chunks = chunksList;
    }

    return config;
}
