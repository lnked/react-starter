'use strict';

const webpack = require('webpack');
const ReactStaticPlugin = require('react-static-webpack-plugin');

// https://www.npmjs.com/package/react-static-webpack-plugin

const plugins = [
    new ReactStaticPlugin({
        routes: 'settings/routes.js',   // Path to routes file 
        template: 'app.pug',            // Path to JSX template file
    })
];

module.exports.config = plugins;