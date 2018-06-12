'use strict';

const { resolve } = require('path');
const { randomInteger } = require('./functions');

const _distBase_ = 'dist';

const _node_ = resolve(__dirname, '../node_modules');
const _base_ = resolve(__dirname, '../');
const _root_ = resolve(__dirname, '../src');
const _dist_ = resolve(__dirname, `../${_distBase_}`);

const isDeploy  = process.argv.includes('deploy');
const isAnalyze = process.argv.includes('analyze');
const isRelease = process.argv.includes('release') || isAnalyze;
const isAssemply = process.argv.includes('assemply');

const isProduction = isDeploy || isRelease || isAnalyze || isAssemply;
const isDevelopment = process.argv.includes('development') || !isProduction;

const _host_ = process.env.HOST || '0.0.0.0';
const _port_ = process.env.PORT || randomInteger(3000, 8000);

module.exports = {
    rs_host: _host_,
    rs_port: _port_,
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_preact: false,
    rs_sourceMap: !isRelease,
    rs_distBase: _distBase_,
    rs_target: 'web', // 'web' | 'node' | electron-main | electron-renderer
    rs_deploy: isDeploy,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: isRelease,
    rs_contentBase: `./${_distBase_}`,
    rs_asset_name: isDevelopment
                    ? '[path][name].[ext]?[hash:4]'
                    : '[hash:4].[ext]',
    rs_regexp_scripts: /\.(j|t)s[x]?$/i,
    rs_regexp_medias: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
    rs_regexp_styles: /\.(css|less|styl|s(a|c)ss|sss)$/i, // /\.(s(a|c)ss)$/
    rs_regexp_images: /\.(bmp|gif|jpe?g|png|webp|svg)$/i, // /.*\.(jpe?g|png|gif|webp|svg)$/i,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isProduction
                    ? '/assets/'
                    : '',
    rs_environment: isProduction ? 'production' : 'development'
}
