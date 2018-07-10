'use strict';

const define = require('./define');
const { resolve } = require('path');

const bundle = [
    // 'core-js/es6/map',
    // 'core-js/es6/set',
    'react',
    'react-dom',
    'react-router-dom',
    'axios',
    'store2',
    // 'mobx',
    // 'mobx-react',
    // 'mobx-state-tree',
];

const client = [
    ...define.rs_development ? [
        '@babel/polyfill',
        `webpack-dev-server/client?http://${define.rs_host}:${define.rs_port}`,
        'webpack/hot/only-dev-server',
    ] : [],
    resolve(define.rs_root, 'client'),
];

const entryPoint = {
    bundle,
    client
}

module.exports.config = entryPoint;
