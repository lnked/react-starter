'use strict';

const { resolve } = require('path');

const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');
const _deploy_ = '/react-starter/';

const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production' || !isDev;
const isDeploy = !(process.argv.indexOf('deploy') === -1)
const isRelease = !(process.argv.indexOf('release') === -1)
const isAnalyzer = !(process.argv.indexOf('analyzer') === -1)
const isCompress = isPro || isRelease || isAnalyzer;

module.exports = {
    rs_generate_css: false,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_output_path: isDeploy ? _deploy_ : '',
    rs_environment: isCompress ? 'production' : 'development',
    rs_production: isCompress,
    rs_development: isDev,
    rs_analyzer: isAnalyzer,
    rs_release: isRelease
}