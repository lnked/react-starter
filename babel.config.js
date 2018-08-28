const entry = require('./webpack/entry-point').config

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

module.exports = function (api) {
    const env = api.env()
    const loose = true

    let useBuiltIns = false

    if (entry.bundle.indexOf('@babel/polyfill') >= 0 || entry.bundle.indexOf('babel-polyfill') >= 0) {
        useBuiltIns = 'usage'
    }

    const test = env === 'test'
    const production = env === 'production'
    const development = env === 'development'

    const sourceMaps = development

    const plugins = []
    const presets = []
    const ignore = []

    // ///////////////////////////////////////////////////////////
    // //////////////   PRESETS   ////////////////////////////////
    // ///////////////////////////////////////////////////////////

    presets.push([
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
            },
            loose,
            debug: false,
            modules: false,
            useBuiltIns,
            shippedProposals: false,
            forceAllTransforms: production,
            exclude: [ 'web.dom.iterable' ],
        },
    ])

    presets.push('@babel/preset-typescript')

    presets.push('@babel/preset-react')

    // /////////////////////////////////////////////////////////////
    // ////////////////   PLUGINS   ////////////////////////////////
    // /////////////////////////////////////////////////////////////

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

    // const plugins: [ env === 'production' && 'babel-plugin-that-is-cool' ].filter(Boolean)

    plugins.push('transform-async-to-generator')

    plugins.push([
        '@babel/plugin-proposal-pipeline-operator',
        {
            proposal: 'minimal',
        },
    ])

    // Stage 2
    plugins.push([
        '@babel/plugin-proposal-decorators',
        {
            legacy: true,
        },
    ])
    plugins.push('@babel/plugin-proposal-function-sent')
    plugins.push('@babel/plugin-proposal-export-namespace-from')
    plugins.push('@babel/plugin-proposal-numeric-separator')
    plugins.push('@babel/plugin-proposal-throw-expressions')

    // Stage 3
    plugins.push('@babel/plugin-syntax-dynamic-import')
    plugins.push('@babel/plugin-syntax-import-meta')
    plugins.push([
        '@babel/plugin-proposal-class-properties',
        {
            loose: false,
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

    if (development) {
        plugins.push('react-hot-loader/babel')
    }

    if (production) {
        plugins.push('transform-react-pure-class-to-function')
        plugins.push('transform-react-remove-prop-types')
        plugins.push('@babel/plugin-transform-react-inline-elements')
        plugins.push('@babel/plugin-transform-react-constant-elements')
    }

    if (test) {
        plugins.push('transform-es2015-modules-commonjs')
    }

    // /////////////////////////////////////////////////////////////
    // ////////////////   IGNORE   /////////////////////////////////
    // /////////////////////////////////////////////////////////////

    if (production) {
        ignore.push('dist')
        ignore.push('tests')
        ignore.push('node_modules')
    }

    if (!test) {
        ignore.push('**/__tests__')
    }

    module.exports = {
        sourceMaps,
        presets,
        plugins,
        ignore,
    }

    const overrides = []

    // overrides: [
    //     {
    //         test: [ './node_modules' ],
    //         presets: [
    //             // config for node_modules
    //         ],
    //     },
    //     {
    //         test: [ './tests' ],
    //         presets: [
    //             // config for tests
    //         ],
    //     },
    // ],

    // if (process.env['REMOVE_DEBUG'] === 1) {
    //     plugins.push('babel-plugin-remove-console-debug')
    // }

    return {
        sourceMaps,
        presets,
        plugins,
        overrides,
        ignore,
    }
}
