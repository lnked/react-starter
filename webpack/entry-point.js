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

if (define.rs_development) {
    Object.assign(entryPoint, {
        app: [
            'react-hot-loader/patch',
            resolve(define.rs_root, 'app')
        ]
    });
} else {
    Object.assign(entryPoint, {
        app: resolve(define.rs_root, 'app')
    });
}

module.exports.config = entryPoint;
