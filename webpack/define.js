'use strict';

const { resolve } = require('path');

const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');
const _deploy_ = '/react-starter/';

const isDeploy  = process.argv.includes('deploy');
const isAnalyze = process.argv.includes('analyze');
const isRelease = process.argv.includes('release') || isAnalyze;

const isProduction = isRelease || isAnalyze;
const isDevelopment = process.argv.includes('development');

console.log('deploy: ', isDeploy)
console.log('dnalyze: ', isAnalyze)
console.log('release: ', isRelease)
console.log('production: ', isProduction)
console.log('development: ', isDevelopment)

process.env.NODE_ENV = isProduction ? 'production' : 'development';

module.exports = {
    rs_root: _root_,
    rs_dist: _dist_,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: isRelease,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isDeploy ? _deploy_ : '',
    rs_environment: isProduction ? 'production' : 'development'
}