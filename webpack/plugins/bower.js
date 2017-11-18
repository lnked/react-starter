'use strict';

const webpack = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');

const plugins = [
    new BowerWebpackPlugin({})
];

module.exports.config = plugins;
