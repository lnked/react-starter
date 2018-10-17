const hotClient = require('webpack-hot-client')
const middleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const stats = require('./stats')
const define = require('./define')
const config = require('./development.config')

const compiler = webpack(config)
const { publicPath } = config.output

const options = {
    hmr: true,
    host: define.rs_host,
    port: define.rs_port,
    reload: true,
    https: false,
    autoConfigure: false,
}

const client = hotClient(compiler, options)
const { server } = client

const app = new (require('express'))()

server.on('listening', () => {
    app.use(
        middleware(compiler, {
            publicPath,
            watchOptions: {
                aggregateTimeout: 300,
            },
            serverSideRender: true,
            stats: stats.config,
        })
    )

    app.use(
        middleware(compiler, {
            log: console.log,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000,
        })
    )

    app.get('/', (req, res) => {
        res.sendFile(`${define.rs_contentBase}/index.html`)
    })

    app.listen(define.rs_port, () => console.log('Example app listening on port 3000!'))
})
