'use strict';

const { resolve } = require('path');
const define = require('../define');

const rules = [
    {
        test: /\.pug$/,
        use: ['pug-loader'],
        include: define.rs_root
    }
];

module.exports.config = rules;
