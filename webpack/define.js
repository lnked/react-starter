'use strict';

const { resolve } = require('path');

const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');
const _deploy_ = '/react-starter/';

const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production' || !isDev;

const isDeploy  = process.argv.includes('deploy');
const isAnalyze = process.argv.includes('analyze');
const isRelease = process.argv.includes('release') || isAnalyze;
const isAssemply = isPro || isRelease || isAnalyze;

module.exports = {
    rs_generate_css: false,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_output_path: isDeploy ? _deploy_ : '',
    rs_environment: isAssemply ? 'production' : 'development',
    rs_production: isAssemply,
    rs_development: isDev,
    rs_analyzer: isAnalyze,
    rs_release: isRelease
}