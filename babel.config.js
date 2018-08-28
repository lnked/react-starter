module.exports = function (api) {
    const env = api.env()
    const includeCoverage = process.env.BABEL_COVERAGE === 'true'

    const envOpts = {
        loose: true,
        modules: false,
        exclude: [ 'transform-typeof-symbol' ],
    }

    let convertESM = true
    let ignoreLib = true
    let includeRuntime = false

    switch (env) {
        // Configs used during bundling builds.
        case 'babel-parser':
            convertESM = false
            ignoreLib = false
            break
        case 'standalone':
            convertESM = false
            ignoreLib = false
            includeRuntime = true
            break
        case 'production':
            // Config during builds before publish.
            envOpts.targets = {
                node: '6.9',
            }
            break
        case 'development':
            envOpts.debug = true
            envOpts.targets = {
                node: 'current',
            }
            break
        case 'test':
            envOpts.targets = {
                node: 'current',
            }
            break
    }

    const config = {
        // Our dependencies are all standard CommonJS, along with all sorts of
        // other random files in Babel's codebase, so we use script as the default,
        // and then mark actual modules as modules farther down.
        sourceType: 'script',
        comments: false,
        ignore: [
            // These may not be strictly necessary with the newly-limited scope of
            // babelrc searching, but including them for now because we had them
            // in our .babelignore before.
            'packages/*/test/fixtures',
            ignoreLib ? 'packages/*/lib' : null,
            'packages/babel-standalone/babel.js',
            'packages/babel-preset-env-standalone/babel-preset-env.js',
        ].filter(Boolean),
        presets: [ ['@babel/env', envOpts] ],
        plugins: [
            // TODO: Use @babel/preset-flow when
            // https://github.com/babel/babel/issues/7233 is fixed
            '@babel/plugin-transform-flow-strip-types',
            ['@babel/proposal-class-properties', { loose: true } ],
            '@babel/proposal-export-namespace-from',
            '@babel/proposal-numeric-separator',
            ['@babel/proposal-object-rest-spread', { useBuiltIns: true, loose: true } ],

            // Explicitly use the lazy version of CommonJS modules.
            convertESM ? ['@babel/transform-modules-commonjs', { lazy: true } ] : null,
        ].filter(Boolean),
        overrides: [
            {
                test: 'packages/babel-parser',
                plugins: ['babel-plugin-transform-charcodes', ['@babel/transform-for-of', { assumeArray: true } ] ],
            },
            {
                test: './packages/babel-register',
                plugins: [
                    // Override the root options to disable lazy imports for babel-register
                    // because otherwise the require hook will try to lazy-import things
                    // leading to dependency cycles.
                    convertESM ? '@babel/transform-modules-commonjs' : null,
                ].filter(Boolean),
            },
            {
                // The vast majority of our src files are modules, but we use
                // unambiguous to keep things simple until we get around to renaming
                // the modules to be more easily distinguished from CommonJS
                test: ['packages/*/src', 'packages/*/test', 'codemods/*/src', 'codemods/*/test'],
                sourceType: 'unambiguous',
            },
            {
                // The runtime transform shouldn't process its own runtime or core-js.
                exclude: [
                    'packages/babel-runtime',
                    /[/\\]node_modules[/\\](?:@babel\/runtime|babel-runtime|core-js)[/\\]/,
                ],
                plugins: [ includeRuntime ? '@babel/transform-runtime' : null ].filter(Boolean),
            },
        ].filter(Boolean),
    }

    // we need to do this as long as we do not test everything from source
    if (includeCoverage) {
        config.auxiliaryCommentBefore = 'istanbul ignore next'
        config.plugins.push('babel-plugin-istanbul')
    }

    console.log(config)

    return config

    // const loose = true
    // console.log({ env })
    // const entry = require('./webpack/entry-point').config

    // const imports = [
    //     {
    //         libraryName: 'core-js',
    //         libraryDirectory: 'modules',
    //         camel2DashComponentName: true,
    //     },
    //     {
    //         libraryName: 'lodash',
    //         libraryDirectory: '_',
    //         camel2DashComponentName: false,
    //     },
    //     {
    //         libraryName: 'react-router',
    //         libraryDirectory: 'es',
    //         camel2DashComponentName: false,
    //     },
    //     {
    //         libraryName: 'react-router-dom',
    //         libraryDirectory: 'es',
    //         camel2DashComponentName: false,
    //     },
    // ]

    // let useBuiltIns = false

    // if (entry.bundle.indexOf('@babel/polyfill') >= 0 || entry.bundle.indexOf('babel-polyfill') >= 0) {
    //     useBuiltIns = 'usage'
    // }

    // const test = env === 'test'
    // const production = env === 'production'
    // const development = env === 'development'

    // const sourceMaps = development

    // const overrides = []
    // const plugins = []
    // const presets = []
    // const ignore = []

    // // ///////////////////////////////////////////////////////////
    // // //////////////   PRESETS   ////////////////////////////////
    // // ///////////////////////////////////////////////////////////

    // presets.push([
    //     '@babel/preset-env',
    //     {
    //         targets: {
    //             node: 'current',
    //         },
    //         loose,
    //         debug: false,
    //         modules: false,
    //         useBuiltIns,
    //         shippedProposals: false,
    //         forceAllTransforms: production,
    //         exclude: [ 'web.dom.iterable' ],
    //     },
    // ])

    // presets.push('@babel/preset-typescript')

    // presets.push('@babel/preset-react')

    // // /////////////////////////////////////////////////////////////
    // // ////////////////   PLUGINS   ////////////////////////////////
    // // /////////////////////////////////////////////////////////////

    // imports.map(item => {
    //     plugins.push([
    //         'import',
    //         {
    //             libraryName: item.libraryName,
    //             libraryDirectory: item.libraryDirectory,
    //             camel2DashComponentName: item.camel2DashComponentName,
    //         },
    //         item.libraryName,
    //     ])
    // })

    // plugins.push('transform-async-to-generator')

    // plugins.push([
    //     '@babel/plugin-proposal-pipeline-operator',
    //     {
    //         proposal: 'minimal',
    //     },
    // ])

    // // Stage 2
    // plugins.push([
    //     '@babel/plugin-proposal-decorators',
    //     {
    //         legacy: true,
    //     },
    // ])
    // plugins.push('@babel/plugin-proposal-function-sent')
    // plugins.push('@babel/plugin-proposal-export-namespace-from')
    // plugins.push('@babel/plugin-proposal-numeric-separator')
    // plugins.push('@babel/plugin-proposal-throw-expressions')

    // // Stage 3
    // plugins.push('@babel/plugin-syntax-dynamic-import')
    // plugins.push('@babel/plugin-syntax-import-meta')
    // plugins.push([
    //     '@babel/plugin-proposal-class-properties',
    //     {
    //         loose: false,
    //     },
    // ])
    // plugins.push('@babel/plugin-proposal-json-strings')

    // plugins.push([
    //     'babel-plugin-styled-components',
    //     {
    //         ssr: true,
    //         minify: false,
    //         preprocess: true,
    //         uglifyPure: false,
    //         displayName: false,
    //     },
    // ])

    // if (development) {
    //     plugins.push('react-hot-loader/babel')
    // }

    // if (production) {
    //     plugins.push('transform-react-pure-class-to-function')
    //     plugins.push('transform-react-remove-prop-types')
    //     plugins.push('@babel/plugin-transform-react-inline-elements')
    //     plugins.push('@babel/plugin-transform-react-constant-elements')
    // }

    // if (test) {
    //     plugins.push('transform-es2015-modules-commonjs')
    // }

    // // /////////////////////////////////////////////////////////////
    // // ////////////////   IGNORE   /////////////////////////////////
    // // /////////////////////////////////////////////////////////////

    // if (production) {
    //     ignore.push('dist')
    //     ignore.push('tests')
    //     ignore.push('node_modules')
    // }

    // if (!test) {
    //     ignore.push('**/__tests__')
    // }

    // module.exports = {
    //     sourceMaps,
    //     presets,
    //     plugins,
    //     ignore,
    // }

    // // overrides: [
    // //     {
    // //         test: [ './node_modules' ],
    // //         presets: [
    // //             // config for node_modules
    // //         ],
    // //     },
    // //     {
    // //         test: [ './tests' ],
    // //         presets: [
    // //             // config for tests
    // //         ],
    // //     },
    // // ],

    // // if (process.env['REMOVE_DEBUG'] === 1) {
    // //     plugins.push('babel-plugin-remove-console-debug')
    // // }
    // console.log({ presets })
    // console.log({ plugins })
    // return {
    //     sourceMaps,
    //     presets,
    //     plugins,
    //     overrides,
    //     ignore,
    // }
}
