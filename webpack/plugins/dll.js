const { resolve } = require('path');
const webpack = require('webpack')

const plugins = [
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./manifest.json'),
    // path: join(resolve(define.rs_dist, 'dll'), '[name]-manifest.json'),
    // name: './my-dll.js',
    // scope: 'xyz',
    sourceType: 'commonjs2'
  })
]

module.exports.config = plugins
