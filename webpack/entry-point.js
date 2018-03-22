'use strict';

const define = require('./define');
const { resolve } = require('path');

const entryPoint = Object.assign({}, {
    vendors: [
        'core-js/es6/map',
        'core-js/es6/set',
        'react',
        'react-dom',
        'react-router-dom'

        // 'react',
        // 'react-dom',
        // 'react-router',
        // 'react-helmet',
        // 'react-redux',
        // 'react-router-redux',
        // 'redux',
        // 'redux-connect',
        // 'redux-thunk'
    ]
});

Object.assign(entryPoint, {
    app: [
        ...define.rs_development
        ? [
            'babel-polyfill',
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${define.rs_host}:${define.rs_port}`,
            'webpack/hot/only-dev-server'
        ]
        : [ /* */ ],
        resolve(define.rs_root, 'app')
    ]
});

module.exports.config = entryPoint;
