'use strict';

const { resolve } = require('path');

const _node_ = resolve(__dirname, '../node_modules');
const _base_ = resolve(__dirname, '../');
const _root_ = resolve(__dirname, '../app');
const _dist_ = resolve(__dirname, '../dist');
const _deploy_ = '/react-cms/';

const isDeploy  = process.argv.includes('deploy');
const isAnalyze = process.argv.includes('analyze');
const isRelease = process.argv.includes('release') || isAnalyze;
const isAssemply = process.argv.includes('assemply');

const isProduction = isDeploy || isRelease || isAnalyze || isAssemply;
const isDevelopment = process.argv.includes('development') || !isProduction;

process.env.NODE_ENV = isProduction ? 'production' : 'development';

module.exports = {
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_target: 'web', // 'web' | 'node' | electron-main | electron-renderer
    rs_deploy: isDeploy,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: false, // isProduction
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isDeploy ? _deploy_ : '/',
    rs_environment: isProduction ? 'production' : 'development'
}
