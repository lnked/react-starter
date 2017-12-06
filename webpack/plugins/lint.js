'use strict';

const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const plugins = [
    new StyleLintPlugin({
        configFile: './.stylelintrc',
    })
];

module.exports.config = plugins;
