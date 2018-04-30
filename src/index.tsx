import * as React from 'react'
import deepForceUpdate from 'react-deep-force-update'
import { render } from 'react-dom'
import App from './app'
import 'index.scss'

render(<App />, document.getElementById('app'))

document.body.classList.remove('loading')

declare var module: any

if (module.hot) {
    module.hot.accept('./app', () => {
        deepForceUpdate(App)
    })
}
