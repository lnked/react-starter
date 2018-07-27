'use strict';

const { resolve } = require('path');
const { randomInteger, parseArguments } = require('./functions');

const options = parseArguments(process.argv);

const _source_ = 'src';
const _distBase_ = 'dist';

const _node_ = resolve(__dirname, '../node_modules');
const _base_ = resolve(__dirname, '../');
const _root_ = resolve(__dirname, `../${_source_}`);
const _dist_ = resolve(__dirname, `../${_distBase_}`);

const isDeploy  = options.opts === 'deploy';
const isAnalyze = options.opts === 'analyze';
const isRelease = options.opts === 'release' || isAnalyze;
const isAssemply = options.opts === 'assemply';

const isProduction = isDeploy || isRelease || isAnalyze || isAssemply;
const isDevelopment = options.opts === 'development' || !isProduction;

const _host_ = process.env.HOST || '0.0.0.0';
const _port_ = parseInt(process.env.PORT, 10) || 3000;
const _protocol_ = process.env.HTTPS === 'true' ? 'https' : 'http';

module.exports = {
    rs_host: _host_,
    rs_port: _port_,
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_stats: resolve(_dist_, 'stats'),
    rs_parallel: 4, // integet(1-8) or false
    rs_protocol: _protocol_,
    rs_preact: false,
    rs_sourceMap: true,
    rs_source: _source_,
    rs_distBase: _distBase_,
    rs_packageJson: resolve(_base_, 'package.json'),
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
    rs_regexp_files: /\.(wexbim|docx?|csv|xlsx|pdf)$/i,
    rs_regexp_medias: /\.(mp4|webm|wav|avi|mp3|mov|m4a|aac|oga)$/i,
    rs_regexp_styles: /\.(less|styl|(sa|sc|c|s)ss)$/i,
    rs_regexp_images: /\.(?:ico|bmp|gif|png|jpe?g|webp|svg)$/i, // /.*\.(jpe?g|png|gif|webp|svg)$/i,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isProduction
                    ? '/assets/'
                    : '/',
    rs_mode: isProduction
            ? 'production'
            : 'development',
    rs_environment: options.env || 'local'
}
