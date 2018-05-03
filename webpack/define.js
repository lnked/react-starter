'use strict';

const { resolve } = require('path');

const _node_ = resolve(__dirname, '../node_modules');
const _base_ = resolve(__dirname, '../');
const _root_ = resolve(__dirname, '../src');
const _dist_ = resolve(__dirname, '../dist');

const isDeploy  = process.argv.includes('deploy');
const isAnalyze = process.argv.includes('analyze');
const isRelease = process.argv.includes('release') || isAnalyze;
const isAssemply = process.argv.includes('assemply');

const isProduction = isDeploy || isRelease || isAnalyze || isAssemply;
const isDevelopment = process.argv.includes('development') || !isProduction;

const _host_ = process.env.HOST || '0.0.0.0';
const _port_ = process.env.PORT || 3000;

const staticAssetName = isDevelopment ? '[path][name].[ext]?[hash:8]' : '[hash:5].[ext]';

// const config = require('dotenv').config();
// console.log(config);

module.exports = {
    rs_host: _host_,
    rs_port: _port_,
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_target: 'web', // 'web' | 'node' | electron-main | electron-renderer
    rs_deploy: isDeploy,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: false, // isProduction
    rs_contentBase: './dist',
    rs_asset_name: staticAssetName,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isDeploy ? '/react-cms/' : '/assets/',
    rs_environment: isProduction ? 'production' : 'development'
}
