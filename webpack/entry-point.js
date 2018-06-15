'use strict';

const define = require('./define');
const { resolve } = require('path');

const entryPoint = Object.assign({}, {
    vendors: [
        // 'core-js/es6/map',
        // 'core-js/es6/set',
        'react',
        'react-dom',
        'react-router-dom',
        'axios',
        'store'

        // 'mobx',
        // 'mobx-react',
        // 'mobx-state-tree'
    ]
});

Object.assign(entryPoint, {
    index: [
        ...define.rs_development ? [
            '@babel/polyfill',
            // `webpack-dev-server/client?http://${define.rs_host}:${define.rs_port}`,
            // 'webpack/hot/only-dev-server'
        ] : [ /* */ ],
        resolve(define.rs_root, 'index')
    ]
});

module.exports.config = entryPoint;
