'use strict';

const define = require('./define');
const { resolve } = require('path');
const { polyfills } = require('./polyfills')

const bundle = [
    ...polyfills,
    'react',
    'react-dom',
    'react-router-dom',
    // 'axios'
    // 'store2'
];

const client = [
    ...define.rs_development ? [
        '@babel/polyfill',
        'react-dev-utils/webpackHotDevClient',
        // `webpack-dev-server/client?http://${define.rs_host}:${define.rs_port}`,
        // 'webpack/hot/only-dev-server',
    ] : [],
    resolve(define.rs_root, 'client')
];

const entryPoint = {
    bundle,
    client
}

module.exports.config = entryPoint;
