/* eslint-disable */
const imports = [
  {
    libraryName: 'core-js',
    libraryDirectory: 'modules',
    camel2DashComponentName: true,
  },
  {
    libraryName: 'lodash',
    libraryDirectory: '',
    camel2DashComponentName: false,
  },
  {
    libraryName: 'history',
    libraryDirectory: 'es',
    camel2DashComponentName: false,
  },
]

// ///////////////////////////////////////////////////////////
// //////////////   PRESETS   ////////////////////////////////
// ///////////////////////////////////////////////////////////
const transform = (prefix, preventFullImport) => {
  return {
    transform: (importName, matches) => {
      const name = importName.replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`).replace(/^-/, "")
      return `${prefix}/${name}`
    },
    preventFullImport,
  }
}

const transforms = {
  // './components': transform('./components', true),
  // '^utils\/?(((\\w*)?\/?)*)': transform('utils', false),
  // '^pages\/?(((\\w*)?\/?)*)': transform('pages', false),
  // // '^helpers\/?(((\\w*)?\/?)*)': transform('helpers', false),
  // '^layouts\/?(((\\w*)?\/?)*)': transform('layouts', false),
  // '^fragments\/?(((\\w*)?\/?)*)': transform('fragments', false),
  // '^components\/?(((\\w*)?\/?)*)': transform('components', false),
}

const getPresets = ({ loose, useBuiltIns, production, modules, targets }) => {
  const presets = []
  presets.push([
    '@babel/preset-env',
    {
      targets,
      modules,
      loose,
      debug: false,
      useBuiltIns,
      shippedProposals: true,
      forceAllTransforms: production,
      exclude: [
        'web.dom.iterable',
        'es6.regexp.to-string',
        'es6.number.constructor',
      ],
    },
  ])
  presets.push('@babel/preset-react')
  presets.push('@babel/preset-typescript')

  return presets
}

// ///////////////////////////////////////////////////////////
// //////////////   PLUGINS   ////////////////////////////////
// ///////////////////////////////////////////////////////////
const getPlugins = ({ loose, legacy, useBuiltIns, test, development, production }) => {
  const plugins = []

  plugins.push(['transform-imports', transforms])
  plugins.push('@loadable/babel-plugin')

  plugins.push(['module-resolver', {
    root: [ './src' ],
    alias: {
      // 'test': './test',
      // 'underscore': 'lodash',
    },
  }])

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
  plugins.push('@babel/plugin-proposal-do-expressions')

  plugins.push([
    'babel-plugin-styled-components',
    {
      ssr: true,
      pure: true,
      minify: false,
      fileName: false,
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

  plugins.push(production && '@babel/plugin-transform-react-constant-elements')
  plugins.push(production && '@babel/plugin-transform-react-inline-elements')

  plugins.push((test || production) && 'transform-es2015-modules-commonjs')

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

  return plugins
}

// /////////////////////////////////////////////////////////////
// ////////////////   IGNORE   /////////////////////////////////
// /////////////////////////////////////////////////////////////
const getIgnore = ({ test, production }) => {
  const ignore = []

  ignore.push('packages/*/test/fixtures')
  ignore.push('packages/*/lib')
  ignore.push(production && 'dist')
  ignore.push(production && 'tests')
  ignore.push(production && 'node_modules')
  ignore.push(!test && '**/__tests__')
  // ignore.push('packages/babel-standalone/babel.js')
  // ignore.push('packages/babel-preset-env-standalone/babel-preset-env.js')

  return ignore
}

const getEnv = () => {
  return {
    // // This is the config we'll use to generate bundles for legacy browsers.
    // legacy: {
    //   presets: [
    //     [
    //       '@babel/preset-env', {
    //         modules: false,
    //         useBuiltIns: 'entry',
    //         // This should reasonably target older browsers.
    //         targets: '> 0.25%, last 2 versions, Firefox ESR',
    //       },
    //     ],
    //   ],
    //   plugins: [
    //     '@babel/plugin-transform-runtime',
    //     '@babel/plugin-syntax-dynamic-import',
    //   ],
    // },
    // // This is the config we'll use to generate bundles for modern browsers.
    // modern: {
    //   presets: [
    //     [
    //       '@babel/preset-env', {
    //         modules: false,
    //         targets: {
    //           // This will target browsers which support ES modules.
    //           esmodules: true,
    //         },
    //       },
    //     ],
    //   ],
    //   plugins: [
    //     '@babel/plugin-transform-runtime',
    //     '@babel/plugin-syntax-dynamic-import',
    //   ],
    // },
  }
}

module.exports = function (api) {
  const web = api.caller((caller) => Boolean(caller && caller.target === 'web'))
  const babel = api.caller((caller) => Boolean(caller && caller.name === 'babel-loader'))

  const test = api.env('test')
  const production = api.env('production')
  const development = api.env('development')

  const loose = true
  const legacy = true
  const useBuiltIns = web ? 'usage' : undefined
  const targets = !web ? { node: 'current' } : undefined
  const modules = babel ? false : 'commonjs'

  const presets = getPresets({ loose, useBuiltIns, production, modules, targets })
  const plugins = getPlugins({ loose, legacy, useBuiltIns, test, development, production })
  const ignore = getIgnore({ test, production })

  const overrides = []

  const sourceMaps = production

  const env = getEnv()

  return {
    sourceMaps,
    comments: true,
    ignore: ignore.filter(Boolean),
    presets: presets.filter(Boolean),
    plugins: plugins.filter(Boolean),
    overrides: overrides.filter(Boolean),
    env,
  }
}
