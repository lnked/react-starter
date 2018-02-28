const __svg__ = {
    path: 'assets/svgstore/**/*.svg',
    name: '../.cache/svgstore/svgstore.svg'
}

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)
