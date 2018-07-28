'use strict';

const { join } = require('path');
const define = require('../define');
const Visualizer = require("webpack-visualizer-plugin");

// const currentDateTime = new Date();
// const currentDate = currentDateTime.toLocaleDateString('en-GB').replace(/\//g, "-");
// const currentTime = currentDateTime.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, "-");
// const filename = join('../stats', `statistics-${currentDate + '-' + currentTime}.html`);

const filename = join('../stats', `statistics.html`);

const plugins = [
    new Visualizer({
        filename: filename
    })
];

module.exports.config = plugins;
