'use strict';

const path = require('path');

const _root_ = path.resolve(__dirname, '../app');
const _dist_ = path.resolve(__dirname, '../dist');

const isPro = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production';

module.exports = {
    rs_deploy_path: '/react-starter/',
    rs_root: _root_,
    rs_dist: _dist_,
    rs_environment: isPro ? 'production' : 'development',
    rs_production: isPro,
    rs_development: isDev
}
