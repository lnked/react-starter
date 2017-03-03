'use strict';

const { resolve } = require('path');

const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');

const isPro = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development' || !isPro;

module.exports = {
    rs_deploy_path: '/react-starter/',
    rs_root: _root_,
    rs_dist: _dist_,
    rs_environment: isPro ? 'production' : 'development',
    rs_production: isPro,
    rs_development: isDev
}
