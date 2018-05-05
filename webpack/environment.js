'use strict';

const { resolve } = require('path');

const define = require('./define');

const fs = require('fs');
const staging = `.env.${define.rs_environment}`;
const dotenv = require('dotenv');

const config = dotenv.config({
    path: resolve(process.cwd(), staging)
});

const formatter = (params, stringify = false) => {
    const length = Object.keys(params).length;

    if (length) {
        for (let x in params) {
            if (stringify) {
                params[x] = JSON.stringify(params[x]);
            }
        }
    }

    return params;
}

module.exports.config = config.parsed;
module.exports.formatter = formatter;


