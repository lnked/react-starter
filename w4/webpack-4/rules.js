'use strict';

module.exports.config = [
    ...require('./rules/files').config,
    ...require('./rules/fonts').config,
    ...require('./rules/media').config,
    ...require('./rules/images').config,
    ...require('./rules/styles').config,
    ...require('./rules/scripts').config,
    ...require('./rules/template').config
];
