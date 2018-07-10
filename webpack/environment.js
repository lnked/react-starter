'use strict';

const { resolve } = require('path');

const define = require('./define');

const fs = require('fs');
const file = `.env.${define.rs_environment}`;
const dotenv = require('dotenv');

const config = dotenv.config({
    path: resolve(process.cwd(), file)
});

const formatter = (params, stringify = false) => {
    const length = Object.keys(params).length;

    if (length && stringify) {
        for (let x in params) {
            params[x] = JSON.stringify(params[x]);
        }
    }

    return params;
}

module.exports.config = config.parsed;
module.exports.formatter = formatter;


