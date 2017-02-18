'use strict';

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const _root_ = path.resolve(__dirname, '../app');
const _dist_ = path.resolve(__dirname, '../dist');

const isDev = argv.env === 'development' || argv.env !== 'production';
const isPro = argv.env === 'production';

module.exports = {
    rs_deploy_path: '/react-starter/',
    rs_root: _root_,
    rs_dist: _dist_,
    rs_production: isPro,
    rs_development: isDev
}
