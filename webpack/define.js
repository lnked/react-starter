'use strict';

const { resolve } = require('path');

const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');
const _deploy_ = '/react-starter/';

const isDev = process.env.NODE_ENV === 'development';
const isPro = process.env.NODE_ENV === 'production' || !isDev;

const isDeploy  = process.argv.includes('--deploy');
const isRelease = process.argv.includes('--release');
const isAnalyze = process.argv.includes('--analyze');
const isCompress = isPro || isRelease || isAnalyze;

console.log('isDeploy: ', isDeploy)
console.log('isRelease: ', isRelease)
console.log('isAnalyze: ', isAnalyze)
console.log('isCompress: ', isCompress)

module.exports = {
    rs_generate_css: false,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_output_path: isDeploy ? _deploy_ : '',
    rs_environment: isCompress ? 'production' : 'development',
    rs_production: isCompress,
    rs_development: isDev,
    rs_analyzer: isAnalyze,
    rs_release: isRelease
}