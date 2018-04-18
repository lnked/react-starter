import * as React from 'react'
import { render } from 'react-dom'
import App from './app'
import 'index.scss'

render(<App />, document.getElementById('root'))

document.body.classList.remove('loading')
