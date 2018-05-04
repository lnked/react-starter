'use strict';

const { resolve } = require('path');

const define = require('./define');

const fs = require('fs');
const staging = `.env.${define.rs_environment}`;
const dotenv = require('dotenv');

const config = dotenv.config({
    path: resolve(process.cwd(), staging)
});

module.exports.config = config.parsed;

module.exports.stringify = (params) => {
    const length = Object.keys(params.config).length;

    if (length) {
        for (let x in params.config) {
            params.config[x] = JSON.stringify(params.config[x]);
        }
    }

    return params.config;
}
