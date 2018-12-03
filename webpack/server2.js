const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const stats = require('./stats')
const define = require('./define')
const config = require('./development.config')

const app = new (require('express'))()
const port = 3000

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(`${define.rs_contentBase}/index.html`)
})

app.listen(define.rs_port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      define.rs_port,
      define.rs_port
    )
  }
})
