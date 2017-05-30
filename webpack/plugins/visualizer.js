'use strict';

const { resolve } = require('path');
const define = require('../define');
const Visualizer = require('webpack-visualizer-plugin');

const plugins = [
    new Visualizer({
        filename: './statistics.html'
    })
];

module.exports.config = plugins;