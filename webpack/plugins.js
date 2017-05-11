'use strict';

const plugins = [];

const define = require('./define');

if (define.rs_development) {
    plugins.push(
        ...require('./plugins/development').config
    );
}

plugins.push(
    ...require('./plugins/general').config,
    ...require('./plugins/svgstore').config
);

if (define.rs_production) {
    plugins.push(
        ...require('./plugins/production').config,
        ...require('./plugins/uglify').config,
        // ...require('./plugins/favicon').config,
        // ...require('./plugins/closure').config,
        ...require('./plugins/compression').config
        // ...require('./plugins/analyzer').config
    );
}

module.exports.config = plugins;
