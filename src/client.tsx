import * as React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import 'styles/client.scss'

const appRoot = document.getElementById('app')

if (appRoot == null) {
    throw new Error('No root element')
}

const renderApp = () => {
    render(<App />, appRoot)
    document.body.classList.remove('loading')
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app', renderApp)
} else if (process.env.NODE_ENV === 'production') {
    const isHttps = location.protocol.indexOf('https') >= 0

    if ('serviceWorker' in navigator && isHttps) {
        navigator.serviceWorker.register('/sw.js')
    }
}

renderApp()
