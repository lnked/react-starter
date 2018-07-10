'use strict';

const { resolve } = require('path');
const { randomInteger, parseArguments } = require('./functions');

const _source_ = 'src';
const _distBase_ = 'dist';

const _node_ = resolve(__dirname, '../node_modules');
const _base_ = resolve(__dirname, '../');
const _root_ = resolve(__dirname, `../${_source_}`);
const _dist_ = resolve(__dirname, `../${_distBase_}`);

const options = parseArguments(process.argv);

const isDeploy  = options.opts === 'deploy';
const isAnalyze = options.opts === 'analyze';
const isRelease = options.opts === 'release' || isAnalyze;
const isAssemply = options.opts === 'assemply';

const isProduction = isDeploy || isRelease || isAnalyze || isAssemply;
const isDevelopment = options.opts === 'development' || !isProduction;

const _host_ = process.env.HOST || '0.0.0.0';
const _port_ = process.env.PORT || randomInteger(8081, 8084);

module.exports = {
    rs_host: _host_,
    rs_port: _port_,
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_preact: false,
    rs_sourceMap: true,
    rs_source: _source_,
    rs_distBase: _distBase_,
    rs_target: 'web', // 'web' | 'node' | electron-main | electron-renderer
    rs_deploy: isDeploy,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: isRelease,
    rs_imagesPlaceholders: isRelease,
    rs_contentBase: `./${_distBase_}`,
    rs_asset_name: isDevelopment
                    ? '[path][name].[ext]?[hash:4]'
                    : '[hash:4].[ext]',
    rs_regexp_scripts: /\.(j|t)s[x]?$/i,
    rs_regexp_medias: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
    rs_regexp_styles: /\.(css|less|styl|s(a|c)?ss)$/i, // /\.(s(a|c)?ss)$/
    rs_regexp_images: /\.(?:ico|bmp|gif|png|jpe?g|webp|svg)$/i, // /.*\.(jpe?g|png|gif|webp|svg)$/i,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isProduction
                    ? '/assets/'
                    : '',
    rs_environment: options.env || 'development'
}
