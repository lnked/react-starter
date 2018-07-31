'use strict';

const entry = require('./webpack/entry-point').config;

const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
const loose = true

let useBuiltIns = false
let usePolyfile = false

if (entry.bundle.indexOf('@babel/polyfill') >= 0 || entry.bundle.indexOf('babel-polyfill') >= 0) {
    usePolyfile = true
    useBuiltIns = 'usage'
}

const test = env === 'test'
const production = env === 'production'
const development = env === 'development'

const presets = []
const plugins = []
const ignore = []
const sourceMaps = development
const imports = [
    {
        libraryName: 'core-js',
        libraryDirectory: 'modules',
        camel2DashComponentName: true
    },
    {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
    },
    {
        libraryName: 'react-router',
        libraryDirectory: 'es',
        camel2DashComponentName: false
    },
    {
        libraryName: 'react-router-dom',
        libraryDirectory: 'es',
        camel2DashComponentName: false
    },
]

///////////////////////////////////////////////////////////////
//////////////////   PRESETS   ////////////////////////////////
///////////////////////////////////////////////////////////////

presets.push(
    ['@babel/preset-env', {
        targets: {
            node: 'current'
        },
        loose,
        debug: false,
        modules: false,
        useBuiltIns,
        shippedProposals: false,
        forceAllTransforms: production,
        exclude: [
            'web.dom.iterable'
        ]
    }]
)

presets.push('@babel/preset-typescript')

presets.push('@babel/preset-react')

if (production) {
    presets.push('minify')
}

///////////////////////////////////////////////////////////////
//////////////////   PLUGINS   ////////////////////////////////
///////////////////////////////////////////////////////////////

imports.map(item => {
    plugins.push(
        [
            'import', {
                libraryName: item.libraryName,
                libraryDirectory: item.libraryDirectory,
                camel2DashComponentName: item.camel2DashComponentName
            },
            item.libraryName
        ]
    );
})

plugins.push('transform-async-to-generator')

plugins.push(["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]);

// Stage 2
plugins.push(["@babel/plugin-proposal-decorators", { "legacy": true }]);
plugins.push("@babel/plugin-proposal-function-sent");
plugins.push("@babel/plugin-proposal-export-namespace-from");
plugins.push("@babel/plugin-proposal-numeric-separator");
plugins.push("@babel/plugin-proposal-throw-expressions");

// Stage 3
plugins.push("@babel/plugin-syntax-dynamic-import");
plugins.push("@babel/plugin-syntax-import-meta");
plugins.push(["@babel/plugin-proposal-class-properties", { "loose": false }]);
plugins.push("@babel/plugin-proposal-json-strings");

plugins.push(
    ['babel-plugin-styled-components', {
        ssr: true,
        minify: false,
        preprocess: true,
        uglifyPure: false,
        displayName: false
    }]
);

if (production) {
    plugins.push('transform-react-pure-class-to-function')
    plugins.push('transform-react-remove-prop-types')
    plugins.push('@babel/plugin-transform-react-inline-elements')
    plugins.push('@babel/plugin-transform-react-constant-elements')
}

if (test) {
    plugins.push('transform-es2015-modules-commonjs')
}

///////////////////////////////////////////////////////////////
//////////////////   PLUGINS   ////////////////////////////////
///////////////////////////////////////////////////////////////

if (production) {
    ignore.push('dist')
    ignore.push('tests')
    ignore.push('node_modules')
}

if (!test) {
    ignore.push(`**/__tests__`)
}

module.exports = {
    sourceMaps,
    presets,
    plugins,
    ignore
};

// const path = require('path');
// const aliases = require('./webpack/aliases');

// const commonPlugins = [
//     [
//         require.resolve('babel-plugin-module-resolver'),
//         {
//             root: [path.resolve('./')],
//             alias: aliases,
//         },
//     ],
// ];

// const relayTransformWatchPlugin = [
//     require.resolve('babel-plugin-transform-relay-hot'),
//     {
//         schema: './build/schema.graphql.json',
//         watchInterval: 2000,
//     },
// ];

// const relayTransformStaticPlugin = [
//     require.resolve('babel-plugin-transform-relay-hot'),
//     {
//         schema: './build/schema.graphql.json',
//         watchInterval: 0, // disable watch
//     },
// ];

// const commonNodePlugins = [
//     // Compiles import() to a deferred require()
//     // require.resolve('babel-plugin-dynamic-import-node'),
//     [
//         require.resolve('babel-plugin-import-inspector'),
//         {
//             serverSideRequirePath: true,
//             webpackRequireWeakId: true,
//         },
//     ],
// ];

// const commonBrowserPlugins = [
//     // Adds syntax support for import()
//     // Does not work with Webpack dynamic import. Eg. for SvgIcons
//     // require.resolve('babel-plugin-syntax-dynamic-import'),
//     [
//         require.resolve('babel-plugin-import-inspector'),
//         {
//             webpackRequireWeakId: true,
//         },
//     ],
// ];

// const reactDevelopmentPlugins = [
//     // The following two plugins are currently necessary to make React warnings
//     // include more valuable information. They are included here because they are
//     // currently not enabled in babel-preset-react. See the below threads for more info:
//     // https://github.com/babel/babel/issues/4702
//     // https://github.com/babel/babel/pull/3540#issuecomment-228673661
//     // https://github.com/facebookincubator/create-react-app/issues/989

//     // Adds component stack to warning messages
//     require.resolve('babel-plugin-transform-react-jsx-source'),
//     // Adds __self attribute to JSX which React will use for some warnings
//     require.resolve('babel-plugin-transform-react-jsx-self'),
// ];

// const reactProductionPlugins = [
//     // improve production build,
//     // see https://medium.com/doctolib-engineering/improve-react-performance-with-babel-16f1becfaa25
//     require.resolve('babel-plugin-transform-react-remove-prop-types'),
//     require.resolve('babel-plugin-transform-react-inline-elements'),
//     // Optimization: hoist JSX that never changes out of render()
//     // Disabled because of issues:
//     // * https://github.com/facebookincubator/create-react-app/issues/525
//     // * https://phabricator.babeljs.io/search/query/pCNlnC2xzwzx/
//     // * https://github.com/babel/babel/issues/4516
//     // TODO: Enable again when these issues are resolved.
//     // require.resolve('babel-plugin-transform-react-constant-elements')
// ];

// const inlineImportPlugin = [
//     require.resolve('babel-plugin-inline-import'),
//     { extensions: ['.mjml', '.txt'] },
// ];

// // ///////////////////////////////////////////////////////////////
// // //////////////////   PRESETS   ////////////////////////////////
// // ///////////////////////////////////////////////////////////////

// // ES features necessary for user's Node version
// const nodeDevelopmentPreset = [
//     require.resolve('babel-preset-env'),
//     {
//         targets: {
//             node: 'current',
//         },
//     },
// ];
// const nodeProductionPreset = [
//     require.resolve('babel-preset-env'),
//     {
//         targets: {
//             node: '6.9.4',
//         },
//     },
// ];

// // Latest stable ECMAScript features
// const browserProductionPreset = [
//     require.resolve('babel-preset-env'),
//     {
//         targets: {
//             // React parses on ie 9, so we should too
//             ie: 9,
//             // We currently minify with uglify
//             // Remove after https://github.com/mishoo/UglifyJS2/issues/448
//             uglify: true,
//         },
//         // Disable polyfill transforms
//         useBuiltIns: false,
//         // Do not transform modules to CJS
//         modules: false,
//     },
// ];
// const browserDevelopmentPreset = [
//     require.resolve('babel-preset-env'),
//     {
//         targets: {
//             // chrome: 55,
//             browsers: ['last 2 versions', 'safari >= 10'],
//         },
//         // Disable polyfill transforms
//         useBuiltIns: false,
//         // Do not transform modules to CJS
//         modules: false,
//     },
// ];

// // JSX, Flow
// const reactPreset = require.resolve('babel-preset-react');

// // ///////////////////////////////////////////////////////////////
// // //////////////////   EXPORT   /////////////////////////////////
// // ///////////////////////////////////////////////////////////////

// module.exports = {
//     presets: [reactPreset, 'stage-0'],
//     plugins: [...commonPlugins],
//     env: {
//         browser_development: {
//             presets: [browserDevelopmentPreset, reactPreset, 'stage-0'],
//             plugins: [
//                 ...reactDevelopmentPlugins,
//                 ...commonBrowserPlugins,
//                 relayTransformWatchPlugin,
//             ],
//         },
//         browser_production: {
//             presets: [browserProductionPreset, reactPreset, 'stage-0'],
//             plugins: [relayTransformStaticPlugin, ...reactProductionPlugins, ...commonBrowserPlugins],
//         },
//         server_development: {
//             presets: [nodeDevelopmentPreset, reactPreset, 'stage-0'],
//             plugins: [...commonNodePlugins, ...reactDevelopmentPlugins, relayTransformWatchPlugin],
//         },
//         server_production: {
//             presets: [nodeProductionPreset, reactPreset, 'stage-0'],
//             plugins: [...commonNodePlugins, relayTransformStaticPlugin, ...reactProductionPlugins],
//         },
//         test: {
//             presets: [nodeDevelopmentPreset, reactPreset, 'stage-0'],
//             plugins: [...commonNodePlugins, ...reactDevelopmentPlugins, relayTransformWatchPlugin],
//         },
//         scripts: {
//             presets: [nodeDevelopmentPreset, reactPreset, 'stage-0'],
//             plugins: [inlineImportPlugin],
//         },
//     },
// };
