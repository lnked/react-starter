'use strict';

const define = require('./define');
const { resolve } = require('path');

const entryPoint = Object.assign({}, {
    vendor: [
        'core-js/es6/map',
        'core-js/es6/set',
        'react',
        'react-dom',
        'react-router-dom'
    ]
});

if (define.rs_development) {
    Object.assign(entryPoint, {
        app: [
            'react-hot-loader/patch',
            resolve(define.rs_root, 'app.jsx')
        ]
    });
} else {
    Object.assign(entryPoint, {
        app: resolve(define.rs_root, 'app.jsx')
    });
}

module.exports.config = entryPoint;
