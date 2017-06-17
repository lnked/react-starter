'use strict';

const define = require('./define');

module.exports.config = {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
        green: '\u001b[32m',
    }
}

// module.exports.config = {
//     optimizationBailout: true,
//     // Add asset Information
//     assets: true,
//     // Sort assets by a field
//     assetsSort: "field",
//     // Add information about cached (not built) modules
//     cached: false,
//     // Show cached assets (setting this to `false` only shows emitted files)
//     cachedAssets: define.rs_production,
//     // Add children information
//     children: false,
//     // Add chunk information (setting this to `false` allows for a less verbose output)
//     chunks: false,
//     // Add built modules information to chunk information
//     chunkModules: false,
//     // Add the origins of chunks and chunk merging info
//     chunkOrigins: false,
//     // Sort the chunks by a field
//     chunksSort: "field",
//     // Context directory for request shortening
//     context: define.rs_root,
//     // `webpack --colors` equivalent
//     colors: true,
//     // Display the distance from the entry point for each module
//     depth: false,
//     // Display the entry points with the corresponding bundles
//     entrypoints: false,
//     // Add errors
//     errors: true,
//     // Add details to errors (like resolving log)
//     errorDetails: true,
//     // Exclude modules which match one of the given strings or regular expressions
//     exclude: [],
//     // Add the hash of the compilation
//     hash: false,
//     // Set the maximum number of modules to be shown
//     maxModules: 0,
//     // Add built modules information
//     modules: false,
//     // Sort the modules by a field
//     modulesSort: "field",
//     // Show performance hint when file size exceeds `performance.maxAssetSize`
//     performance: false,
//     // Show the exports of the modules
//     providedExports: false,
//     // Add public path information
//     publicPath: false,
//     // Add information about the reasons why modules are included
//     reasons: define.rs_development,
//     // Add the source code of modules
//     source: false,
//     // Add timing information
//     timings: true,
//     // Show which exports of a module are used
//     usedExports: false,
//     // Add webpack version information
//     version: false,
//     // Add warnings
//     warnings: true
// }
