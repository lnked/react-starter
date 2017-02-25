'use strict';

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const _root_ = path.resolve(__dirname, '../app');
const _dist_ = path.resolve(__dirname, '../dist');

const isPro = argv.env === 'production';
const isDev = argv.env === 'development' || argv.env !== 'production';

// const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
    rs_deploy_path: '/react-starter/',
    rs_root: _root_,
    rs_dist: _dist_,
    rs_environment: isPro ? 'production' : 'development',
    rs_production: isPro,
    rs_development: isDev
}
