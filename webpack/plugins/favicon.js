'use strict';

const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// https://www.npmjs.com/package/webapp-manifest-plugin

// yarn add --dev webapp-manifest-plugin

// /* ES2015 */
// import WebappManifestPlugin from 'webapp-manifest-plugin';
 
// /* ES5 */
// var WebappManifestPlugin = require('webapp-manifest-plugin').default;
 
// /* -- futher down -- */
// "plugins": [
//   /* ... */,
//   new WebappManifestPlugin(),
// ]

// const config = {
//   name: "",
//   shortName: "",
//   description: null,
//   dir: 'auto',
//   lang: 'en-US',
//   display: 'standalone',
//   orientation: 'any',
//   startUrl: '/',
//   backgroundColor: '#fff',
//   themeColor: '#fff',
//   icons: [],
//   preferRelatedApplications: false,
//   relatedApplications: [],
//   scope: '/'
// }
// /* ES2015 */
// import FaviconsPlugin from 'favicons-webpack-plugin';
// import WebappManifestPlugin, { FAVICON_PLUGIN } from 'webapp-manifest-plugin';
 
// /* ES5 */
// var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// var WebappManifest = require('webapp-manifest-plugin');
// var WebappManifestPlugin = WebappManifest.default;
// var FAVICON_PLUGIN = WebappManifest.FAVICON_PLUGIN;
 
// /* -- futher down -- */
// "plugins": [
//   /* ... */,
//   new FaviconsWebpackPlugin('my-logo.png'),
//   new WebappManifestPlugin({ icons: FAVICON_PLUGIN }),
// ]

const plugins = [
    new FaviconsWebpackPlugin({
        logo: 'assets/favicon/favicon.svg',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'fav-[hash:5]/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#673ab8',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'React starter',
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
            firefox: true,
            android: true,
            favicons: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
        }
    })
];

module.exports.config = plugins;