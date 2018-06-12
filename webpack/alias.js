'use strict';

const define = require('./define');
const { resolve } = require('path');

const alias =  {
    src: define.rs_root,
    hocs: resolve(define.rs_root, 'hocs'),
    utils: resolve(define.rs_root, 'utils'),
    state: resolve(define.rs_root, 'state'),
    typings: resolve(define.rs_root, 'typings'),
    assets: resolve(define.rs_root, 'assets'),
    config: resolve(define.rs_root, 'config'),
    helpers: resolve(define.rs_root, 'helpers'),
    layouts: resolve(define.rs_root, 'layouts'),
    segments: resolve(define.rs_root, 'segments'),
    containers: resolve(define.rs_root, 'containers'),
    components: resolve(define.rs_root, 'components'),
    images: resolve(define.rs_root, 'assets/images'),
    styles: resolve(define.rs_root, 'assets/styles'),
    scripts: resolve(define.rs_root, 'assets/scripts'),
    svgstore: resolve(define.rs_root, 'assets/svgstore')
}

if (define.rs_preact) {
    alias['react'] = 'preact-compat';
    alias['react-dom'] = 'preact-compat';
    alias['create-react-class'] = 'preact-compat/lib/create-react-class';
    alias['react-dom-factories'] = 'preact-compat/lib/react-dom-factories';
}

module.exports.config = alias;
