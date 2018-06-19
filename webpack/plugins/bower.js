'use strict';

const define = require('../define');
const BowerWebpackPlugin = require("bower-webpack-plugin");

const plugins = [
    new BowerWebpackPlugin({
        modulesDirectories: ["bower_components"],
        manifestFiles:      "bower.json",
        includes:           /.*/,
        excludes:           [],
        searchResolveModulesDirectories: true
    })
];

module.exports.config = plugins;
