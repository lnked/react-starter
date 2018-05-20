'use strict';

const { resolve } = require('path');

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
const _port_ = process.env.PORT || 3000;

// const signale = require('signale');

// signale.success('Operation successful');
// signale.debug('Hello', 'from', 'L59');
// signale.pending('Write release notes for 1.2.0');
// signale.fatal(new Error('Unable to acquire lock'));
// signale.watch('Recursively watching build directory...');
// signale.complete({prefix: '[task]', message: 'Fix issue #59', suffix: '(@klauscfhq)'});

// signale.time('test');
// signale.time();
// signale.time();

// setTimeout(() => {
//     signale.timeEnd();
//     signale.timeEnd();
//     signale.timeEnd('test');
// }, 500);

module.exports = {
    rs_host: _host_,
    rs_port: _port_,
    rs_base: _base_,
    rs_root: _root_,
    rs_dist: _dist_,
    rs_node: _node_,
    rs_distBase: _distBase_,
    rs_target: 'web', // 'web' | 'node' | electron-main | electron-renderer
    rs_deploy: isDeploy,
    rs_release: isRelease,
    rs_analyzer: isAnalyze,
    rs_generate_css: false, // isProduction
    rs_contentBase: `./${_distBase_}`,
    rs_asset_name: isDevelopment
                    ? '[path][name].[ext]?[hash:5]'
                    : '[hash:4].[ext]',
    rs_regexp_scripts: /\.(j|t)s[x]?$/i,
    rs_regexp_medias: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
    rs_regexp_styles: /\.(css|less|styl|s(a|c)ss|sss)$/i, // /\.(s(a|c)ss)$/
    rs_regexp_images: /\.(bmp|gif|jpe?g|png|webp|svg)$/i, // /.*\.(jpe?g|png|gif|webp|svg)$/i,
    rs_production: isProduction,
    rs_development: isDevelopment,
    rs_output_path: isDevelopment
                    ? ''
                    : '',
    rs_environment: isProduction ? 'production' : 'development'
}
