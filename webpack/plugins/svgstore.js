'use strict';

const webpack = require('webpack');
const SpritePlugin = require('svg-sprite-loader/plugin');

const plugins = [
    new SpritePlugin({
        extract: true,
        spriteFilename: 'svgstore.svg'
    })
];

module.exports.config = plugins;