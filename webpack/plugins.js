'use strict';

const plugins = [];
const define = require('./define');

if (define.rs_development) {
    plugins.push(
        ...require('./plugins/development').config
    );
}

plugins.push(
    ...require('./plugins/lint').config,
    ...require('./plugins/general').config
);

if (define.rs_production) {
    plugins.push(
        ...require('./plugins/production').config
    );
};

if (define.rs_release || define.rs_deploy) {
    plugins.push(
        ...require('./plugins/uglify').config,
        ...require('./plugins/compression').config,
        ...require('./plugins/manifest').config,
        ...require('./plugins/precache').config
    )
};

if (define.rs_analyzer) {
    plugins.push(
        ...require('./plugins/analyzer').config,
        ...require('./plugins/visualizer').config
    )
}

module.exports.config = plugins;
