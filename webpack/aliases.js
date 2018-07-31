'use strict';

const define = require('./define');
const { resolve } = require('path');

const alias =  {
    src: define.rs_root,
    hocs: resolve(define.rs_root, 'hocs'),
    utils: resolve(define.rs_root, 'utils'),
    store: resolve(define.rs_root, 'store'),
    theme: resolve(define.rs_root, 'theme'),
    pages: resolve(define.rs_root, 'pages'),
    assets: resolve(define.rs_root, 'assets'),
    config: resolve(define.rs_root, 'config'),
    typings: resolve(define.rs_root, 'typings'),
    helpers: resolve(define.rs_root, 'helpers'),
    layouts: resolve(define.rs_root, 'layouts'),
    images: resolve(define.rs_root, 'assets/images'),
    styles: resolve(define.rs_root, 'assets/styles'),
    scripts: resolve(define.rs_root, 'assets/scripts'),
    compound: resolve(define.rs_root, 'compound'),
    svgstore: resolve(define.rs_root, 'assets/svgstore'),
    components: resolve(define.rs_root, 'components')
}

module.exports.config = {
    ...alias,
    ...define.rs_preact ? {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-dom-factories': 'preact-compat/lib/react-dom-factories'
    } : []
}
