'use strict';

const webpack = require('webpack');
const sassLintPlugin = require('sasslint-webpack-plugin');

const plugins = [
    new sassLintPlugin({
        configFile: '.sass-lint.yml',
        context: ['inherits from webpack'],
        ignoreFiles: [],
        ignorePlugins: [],
        glob: '**/*.s?(a|c)ss',
        quiet: false,
        failOnWarning: false,
        failOnError: false,
        testing: false
    })
];

module.exports.config = plugins;