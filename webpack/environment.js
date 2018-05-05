'use strict';

const { resolve } = require('path');

const define = require('./define');

const fs = require('fs');
const staging = `.env.${define.rs_environment}`;
const dotenv = require('dotenv');

const config = dotenv.config({
    path: resolve(process.cwd(), staging)
});

const stringify = (params) => {
    const length = Object.keys(params).length;

    if (length) {
        for (let x in params) {
            params[x] = JSON.stringify(params[x]);
        }
    }

    return params;
}

module.exports.config = stringify(config.parsed);
