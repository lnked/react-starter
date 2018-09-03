const plugins = []
const define = require('./define')

if (define.rs_development) {
    plugins.push(...require('./plugins/development').config)
}

plugins.push(
    ...require('./plugins/lint').config,
    ...require('./plugins/general').config
)

if (define.rs_production) {
    plugins.push(...require('./plugins/production').config)
}

if (define.rs_release || define.rs_deploy) {
    plugins.push(
        ...require('./plugins/compression').config,
        ...require('./plugins/manifest').config,
        ...require('./plugins/precache').config
    )
}

if (define.rs_analyzer) {
    plugins.push(...require('./plugins/visualizer').config, ...require('./plugins/analyzer').config)
}

module.exports.config = plugins
