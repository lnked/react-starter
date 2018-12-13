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
const getPresets = ({ loose, useBuiltIns, production }) => {

  const presets = []
  presets.push([
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
      loose,
      modules: false,
      debug: false,
      useBuiltIns,
      shippedProposals: true,
      forceAllTransforms: production,
      exclude: [ 'web.dom.iterable' ],
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

  plugins.push(production && '@babel/plugin-transform-react-inline-elements')
  plugins.push(production && '@babel/plugin-transform-react-constant-elements')

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

module.exports = function (api) {

  const test = api.env('test')
  const production = api.env('production')
  const development = api.env('development')

  const loose = true
  const legacy = true
  const useBuiltIns = 'usage'

  const presets = getPresets({ loose, useBuiltIns, production })
  const plugins = getPlugins({ loose, legacy, useBuiltIns, test, development, production })
  const ignore = getIgnore({ test, production })

  const overrides = []

  const sourceMaps = development

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
