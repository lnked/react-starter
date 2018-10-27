const { resolve } = require('path')
const dotenv = require('dotenv')

const define = require('./define')

let file = '.env'

if (define.rs_environment !== 'local') {
    file += `.${define.rs_environment}`
}

const config = dotenv.config({
    path: resolve(process.cwd(), file),
})

const formatter = (params, stringify = false) => {
    const length = Object.keys(params).length

    if (length && stringify) {
        for (const x in params) {
            params[x] = JSON.stringify(params[x])
        }
    }

    return params
}

module.exports.config = config.parsed
module.exports.formatter = formatter
