// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// export default class Error extends Component {
//     static propTypes = {
//         errorObj: PropTypes.object.isRequired
//     }
//   render() {
//         const { status, statusText } = this.props.errorObj.response;
//     return (
//             <div class="note note-danger page-load-error">
//                 <h4 class="block status">{status}</h4>
//                 <p class="icon-holder rounded"><span class="fa fa-exclamation-triangle icon" aria-hidden="true"/></p>
//                 <p class="reason">{statusText}</p>
//             </div>
//     );
//   }
// }


var debug             = process.env.NODE_ENV !== 'production';
var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if(debug) {
  console.log(`BUILD IS IN DEVELOPMENT MODE | NODE_ENV ${process.env.NODE_ENV}`);
} else {
  console.log(`BUILD IS IN PRODUCTION MODE | NODE_ENV ${process.env.NODE_ENV}`);
}

module.exports = {
  context: path.join(__dirname, ""),
  devtool: debug ? "cheap-module-eval-source-map" : "source-map",
  entry: ['./src/index.js',
          './src/sass/main.scss',
          ],
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        use: [
          'babel-loader',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader" },
      {
        test: /\.js$|\.jsx$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
         'style-loader',
         {
           loader: "css-loader"
         }
        ]
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('postcss-smart-import'),
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, "./sass")]
              }
            }
          ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader"
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }]
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        use: [{
          loader: "file-loader",
          options: {
            emitFile: false,
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM'
  // },
  output: {
    path: __dirname + '/dist/',
    filename: 'app.min.js'
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourcemap: false,
      comments: false, // remove comments
      compress: {
        booleans: true,
        conditionals: true,
        dead_code: true, // big one--strip code that will never execute
        drop_console: true, // strips console statements
        drop_debugger: true,
        evaluate: true,
        join_vars: true,
        screw_ie8: true,
        sequences: true,
        unused: true,
        warnings: false, // good for prod apps so users can't peek behind curtain
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new WebpackBundleSizeAnalyzerPlugin('./plain-report.txt'),
    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode: 'static',
      // Host that will be used in `server` mode to start HTTP server.
      analyzerHost: '127.0.0.1',
      // Port that will be used in `server` mode to start HTTP server.
      analyzerPort: 8888,
      // Path to bundle report file that will be generated in `static` mode.
      // Relative to bundles output directory.
      reportFilename: 'report.html',
      // Automatically open report in default browser
      openAnalyzer: true,
      // If `true`, Webpack Stats JSON file will be generated in bundles output directory
      generateStatsFile: false,
      // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
      // Relative to bundles output directory.
      statsFilename: 'stats.json',
      // Options for `stats.toJson()` method.
      // For example you can exclude sources of your modules from stats file with `source: false` option.
      // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
      statsOptions: null,
      // Log level. Can be 'info', 'warn', 'error' or 'silent'.
      logLevel: 'info'
    })
  ]
};