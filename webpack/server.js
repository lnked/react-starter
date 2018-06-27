const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const signale = require('signale');

const stats = require('./stats');
const define = require('./define');
const config = require('./dev.config')

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: define.rs_contentBase,
    hot: true,
    open: true,
    inline: true,
    publicPath: config.output.publicPath,
    overlay: {
        errors: true,
        warnings: true
    },
    progress: false,
    compress: true,
    watchContentBase: false,
    disableHostCheck: true,
    historyApiFallback: {
        disableDotRule: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    stats: stats.config,
    // proxy: proxy.config,
});

server.listen(define.rs_port, define.rs_host, (err, result) => {
    if (err) {
        signale.debug(new Error(err));
        return signale.fatal(new Error(err));
    }

    signale.watch('Recursively watching build directory...');
    signale.success(`Listening at http://${define.rs_host}:${define.rs_port}/`);
});
