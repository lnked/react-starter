'use strict';

const postcss = [];

const define = require('./define');

postcss.push(
    require('postcss-strip-inline-comments'),
    require('postcss-bem-linter'),
    require('postcss-import')({
        root: define.rs_root,
        path: define.rs_root
    }),
    require('stylelint')({
        'syntax': 'scss'
    }),
    // PostCSS plugin for sass-like mixins
    // https://github.com/andyjansson/postcss-sassy-mixins
    require('postcss-sassy-mixins'),
    // PostCSS plugin to import CSS/SugarSS files
    // https://www.npmjs.com/package/postcss-smart-import
    require('postcss-smart-import'),
    // PostCSS plugin for importing other stylesheet source files anywhere in your CSS.
    // https://github.com/eriklharper/postcss-nested-import
    require('postcss-nested-import'),
    // Allow you to fix url() according to postcss to and/or from options
    // https://github.com/postcss/postcss-url
    require('postcss-url'),
    // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
    // https://github.com/postcss/postcss-custom-properties
    require('postcss-custom-properties'),
    // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
    // https://github.com/postcss/postcss-custom-media
    require('postcss-custom-media'),
    // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
    // https://github.com/postcss/postcss-media-minmax
    require('postcss-media-minmax'),
    // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
    // https://github.com/postcss/postcss-custom-selectors
    require('postcss-custom-selectors'),
    // W3C calc() function, e.g. div { height: calc(100px - 2em); }
    // https://github.com/postcss/postcss-calc
    require('postcss-calc'),
    // Allows you to nest one style rule inside another
    // https://github.com/jonathantneal/postcss-nesting
    require('postcss-nesting'),
    // Unwraps nested rules like how Sass does it
    // https://github.com/postcss/postcss-nested
    require('postcss-nested'),
    // adds shorthand hex methods to rgba() values div { color: rgba(red,0.5) }
    // https://github.com/seaneking/postcss-hexrgba
    require('postcss-hexrgba'),
    require('postcss-position'),
    require('postcss-opacity'),
    require('postcss-color-rgba-fallback'),
    // W3C color() function, e.g. div { background: color(red alpha(90%)); }
    // https://github.com/postcss/postcss-color-function
    require('postcss-color-function'),
    // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
    // https://github.com/iamvdo/pleeease-filters
    require('pleeease-filters'),
    // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
    // https://github.com/robwierzbowski/node-pixrem
    require('pixrem')({
        rootValue: 10
    }),
    // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
    // https://github.com/postcss/postcss-selector-matches
    require('postcss-selector-matches'),
    // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
    // https://github.com/postcss/postcss-selector-not
    require('postcss-selector-not'),
    // Postcss flexbox bug fixer
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    require('postcss-flexbugs-fixes'),
    require('postcss-quantity-queries'),
    require('postcss-flexboxfixer'),
    require('postcss-gradientfixer'),
    require('postcss-easings'),
    // require("postcss-cssnext"),
    require('postcss-reporter')({
        clearReportedMessages: true
    })
);

if (define.rs_production) {
    postcss.push(
        require('postcss-discard-comments'),
        require('postcss-emptymediaqueries'),
        require('autoprefixer'),
        require('cssnano')({
            safe: true,
            calc: false,
            zindex: false,
            sourcemap: true,
            autoprefixer: false,
            normalizeCharset: true,
            convertValues: { length: false },
            colormin: true
        })
    );
}

module.exports.config = postcss;
