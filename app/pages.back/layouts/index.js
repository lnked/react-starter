// const fs = require('fs');
// const path = require('path');

// const libs = {};

// fs.readdir(__dirname, (items) => {
//     for (let i=0; i < items.length; i++) {
//         const file = items[i];
//         console.log('file: ', file);

//         fs.stat(path.resolve(__dirname, file), function(err, stats) {
//             if (stats.isDirectory()) {
//                 libs[file] = require(path.resolve(__dirname, [file, 'index.jsx'].join('/')));
//             }
//             // if (stats.isFile()) {
//             //     libs[file] = require(path.resolve(__dirname, file));
//             // } else {
//             // }
//             console.log('libs: ', libs);
//         });
//     }

//     console.log('libs: ', libs);
// })

// module.exports = new Promise((resolve, reject) => {
//     console.log('libs: ', libs);
//     setTimeout(resolve.bind(null, 'libs'), 2000);
// });

const MainLayoutLib = require('./MainLayout');
const SearchLayoutLib = require('./SearchLayout');
const ProductLayoutLib = require('./ProductLayout');

module.exports = {
    MainLayout: MainLayoutLib,
    SearchLayout: SearchLayoutLib,
    ProductLayou: ProductLayoutLib,
};
