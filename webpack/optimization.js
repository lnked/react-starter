const define = require('./define')

module.exports = {
  minimize: define.rs_release,
  chunkIds: 'named',
  nodeEnv: define.rs_mode,
  sideEffects: true,
  usedExports: true,
  providedExports: false,
  concatenateModules: true,
  runtimeChunk: {
    name: 'startup',
  },
  splitChunks: {
    cacheGroups: {
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
      bundle: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        name: 'bundle',
        priority: -10,
        enforce: true,
      },
    },
  },
}
