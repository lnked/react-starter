module.exports = function (api) {
    api.cache(false)
    // api.cache.forever() // api.cache(true)
    // api.cache.never() // api.cache(false)

    // Cached based on the value of some function. If this function returns a value different from
    // a previously-encountered value, the plugins will re-evaluate.
    // const env = api.cache(() => process.env.NODE_ENV)
    const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'production'
    // const test = api.cache.invalidate(() => process.env.NODE_ENV === 'test')
    // const production = api.cache.invalidate(() => process.env.NODE_ENV === 'production')
    // const development = api.cache.invalidate(() => process.env.NODE_ENV === 'development')

    const test = env === 'test'
    const production = env === 'production'
    const development = env === 'development'

    console.log({ env })

    const imports = [
        {
            libraryName: 'core-js',
            libraryDirectory: 'modules',
            camel2DashComponentName: true,
        },
        {
            libraryName: 'lodash',
            libraryDirectory: '_',
            camel2DashComponentName: false,
        },
        {
            libraryName: 'react-router',
            libraryDirectory: 'es',
            camel2DashComponentName: false,
        },
        {
            libraryName: 'react-router-dom',
            libraryDirectory: 'es',
            camel2DashComponentName: false,
        },
    ]

    const entry = require('./webpack/entry-point').config

    const loose = true
    const useBuiltIns = entry.bundle.indexOf('@babel/polyfill') >= 0 ? 'usage' : false

    const plugins = []
    const presets = []

    const overrides = []
    const ignore = []

    const sourceMaps = development

    console.log({ development }, { production }, { test })

    // ///////////////////////////////////////////////////////////
    // //////////////   PRESETS   ////////////////////////////////
    // ///////////////////////////////////////////////////////////

    presets.push([
        // '@babel/preset-env',
        '@babel/env',
        {
            targets: {
                node: 'current',
            },
            loose,
            useBuiltIns,
            debug: development,
            modules: false,
            shippedProposals: true,
            forceAllTransforms: production,
            exclude: [ 'web.dom.iterable' ],
        },
    ])

    presets.push('@babel/preset-typescript')

    presets.push('@babel/preset-react')

    // ///////////////////////////////////////////////////////////
    // //////////////   PLUGINS   ////////////////////////////////
    // ///////////////////////////////////////////////////////////

    imports.map(item => {
        plugins.push([
            'import',
            {
                libraryName: item.libraryName,
                libraryDirectory: item.libraryDirectory,
                camel2DashComponentName: item.camel2DashComponentName,
            },
            item.libraryName,
        ])
    })

    plugins.push('transform-async-to-generator')

    plugins.push(['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }])

    // Stage 2
    plugins.push(['@babel/plugin-proposal-decorators', { legacy: true }])
    plugins.push('@babel/plugin-proposal-function-sent')
    plugins.push('@babel/plugin-proposal-export-namespace-from')
    plugins.push('@babel/plugin-proposal-numeric-separator')
    plugins.push('@babel/plugin-proposal-throw-expressions')

    // Stage 3
    plugins.push('@babel/plugin-syntax-dynamic-import')
    plugins.push('@babel/plugin-syntax-import-meta')
    plugins.push(['@babel/plugin-proposal-class-properties', { loose }])
    plugins.push([
        '@babel/plugin-proposal-object-rest-spread',
        {
            useBuiltIns,
            loose,
        },
    ])
    plugins.push('@babel/plugin-proposal-json-strings')

    plugins.push([
        'babel-plugin-styled-components',
        {
            ssr: true,
            minify: false,
            preprocess: true,
            uglifyPure: false,
            displayName: false,
        },
    ])

    plugins.push(development && 'react-hot-loader/babel')

    plugins.push(production && 'transform-react-pure-class-to-function')
    plugins.push(production && 'transform-react-remove-prop-types')
    plugins.push(production && '@babel/plugin-transform-react-inline-elements')
    plugins.push(production && '@babel/plugin-transform-react-constant-elements')

    plugins.push(test && 'transform-es2015-modules-commonjs')

    // /////////////////////////////////////////////////////////////
    // ////////////////   IGNORE   /////////////////////////////////
    // /////////////////////////////////////////////////////////////

    ignore.push('packages/*/test/fixtures')
    ignore.push('packages/*/lib')
    ignore.push(production && 'dist')
    ignore.push(production && 'tests')
    ignore.push(production && 'node_modules')
    ignore.push(!test && '**/__tests__')
    // ignore.push('packages/babel-standalone/babel.js')
    // ignore.push('packages/babel-preset-env-standalone/babel-preset-env.js')

    return {
        sourceMaps,
        sourceType: 'module',
        comments: false,
        ignore: ignore.filter(Boolean),
        presets: presets.filter(Boolean),
        plugins: plugins.filter(Boolean),
        overrides: overrides.filter(Boolean),
    }
}
