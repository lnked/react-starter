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
            'react-hot-loader/patch', // activate HMR for React
            `webpack-dev-server/client?http://${define.rs_host}:${define.rs_port}`, // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        ]
        : [ /* */ ],
        resolve(define.rs_root, 'app')
    ]
});

module.exports.config = entryPoint;
