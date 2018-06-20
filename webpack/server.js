const hotClient = require('webpack-hot-client');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
const { publicPath } = config.output;
const options = { ... }; // webpack-hot-client options

// we recommend calling the client _before_ adding the dev middleware
const client = hotClient(compiler, options);
const { server } = client;

server.on('listening', () => {
    app.use(middleware(compiler, { publicPath }));
});

// https://webpack.js.org/guides/hot-module-replacement/