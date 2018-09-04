module.exports = function (api) {
    const test = api.env('test')
    const production = api.env('production')
    const development = api.env('development')

    const imports = [
        {
            libraryName: 'core-js',
            libraryDirectory: 'modules',
            camel2DashComponentName: true,
        },
        {
            libraryName: 'core-js',
            libraryDirectory: 'es6',
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

    const loose = true
    const legacy = true
    const useBuiltIns = 'usage'

    const plugins = []
    const presets = []

    const overrides = []
    const ignore = []

    const sourceMaps = development

    // ///////////////////////////////////////////////////////////
    // //////////////   PRESETS   ////////////////////////////////
    // ///////////////////////////////////////////////////////////

    presets.push([
        '@babel/env',
        {
            targets: {
                node: 'current',
            },
            loose,
            modules: false,
            useBuiltIns,
            debug: false,
            shippedProposals: true,
            forceAllTransforms: production,
            exclude: [ 'web.dom.iterable' ],
        },
    ])
    presets.push('@babel/preset-react')
    presets.push('@babel/preset-typescript')

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

    plugins.push(['@babel/plugin-proposal-decorators', { legacy }])
    plugins.push(['@babel/plugin-proposal-class-properties', { loose }])

    // Stage 2
    plugins.push('@babel/plugin-proposal-function-sent')
    plugins.push('@babel/plugin-proposal-export-namespace-from')
    plugins.push('@babel/plugin-proposal-numeric-separator')
    plugins.push('@babel/plugin-proposal-throw-expressions')

    // Stage 3
    plugins.push('@babel/plugin-syntax-dynamic-import')
    plugins.push('@babel/plugin-syntax-import-meta')
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

    plugins.push('transform-async-to-generator')
    plugins.push('@babel/plugin-transform-object-assign')
    plugins.push('@babel/plugin-transform-arrow-functions')
    plugins.push(['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }])

    plugins.push(production && 'transform-react-pure-class-to-function')
    plugins.push(production && 'transform-react-remove-prop-types')
    plugins.push(production && '@babel/plugin-transform-react-inline-elements')
    plugins.push(production && '@babel/plugin-transform-react-constant-elements')

    plugins.push(test && 'transform-es2015-modules-commonjs')

    plugins.push(development && 'react-hot-loader/babel')

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
