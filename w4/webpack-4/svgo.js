'use strict';

module.exports.config = {
    plugins: [
        {removeTitle:true},
        {removeDesc:true},
        {removeViewBox:false},
        {convertPathData:false},
        {removeEmptyAttrs:false},
        {removeDoctype:true},
        {removeMetadata:true},
        {removeComments:true},
        {removeUselessDefs:true},
        {removeXMLProcInst:true},
        {removeDimensions:true},
        {cleanupNumericValues: {
            floatPrecision: 2
        }},
        {cleanupIDs: {
            prefix: '-',
            minify: false
        }},
        {convertColors: {
            names2hex: true,
            shorthex: false,
            rgb2hex: true
        }},
        {removeUselessStrokeAndFill:false}
    ]
}