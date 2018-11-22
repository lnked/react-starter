const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.use('/assets', express.static(`${__dirname}/dist/assets`))
app.use('/static', express.static(`${__dirname}/dist/static`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(3030, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3030')
})
