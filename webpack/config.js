const { resolve } = require('path')

const aliases = require('./aliases')
const rules = require('./rules')
const define = require('./define')
const plugins = require('./plugins')
const entryPoint = require('./entry-point')

// process.noDeprecation = true;
// process.traceDeprecation = true;

module.exports = {
  context: define.rs_root,

  target: define.rs_target,

  entry: entryPoint.config,

  output: {
    publicPath: define.rs_output_path,
    sourceMapFilename: '[name].js.map',
    jsonpFunction: 'WJ',
    hotUpdateFunction: 'UF',
  },

  resolve: {
    symlinks: true,
    modules: ['node_modules', define.rs_root],
    mainFiles: ['index'],
    enforceExtension: false,
    enforceModuleExtension: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json'],
    descriptionFiles: ['package.json', 'bower.json'],
    alias: aliases.config,
  },

  resolveLoader: {
    modules: ['node_modules'],
  },

  module: {
    wrappedContextCritical: true,
    strictExportPresence: true,
    exprContextCritical: false,
    noParse: /jquery|lodash/,
    rules: rules.config,
  },

  plugins: plugins.config,

  node: false,
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   global: true,
  //   crypto: 'empty',
  //   process: true,
  //   module: false,
  //   clearImmediate: false,
  //   setImmediate: false,
  // },
}
