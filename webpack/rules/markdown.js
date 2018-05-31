'use strict';

const marked = require("marked");

const rules = [
    {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    pedantic: true,
                    renderer: new marked.Renderer()
                }
            }
        ]
    }
];

module.exports.config = rules;
