import * as React from 'react'
import { render } from 'react-dom'
import 'styles/client.scss'
// import { App } from './app'

const rootElement = document.getElementById('app')

if (rootElement == null) {
    throw new Error('No root element')
}

const renderApp = async () => {
    const { App } = await import('./app' /* webpackChunkName: "App" */)
    render(<App />, rootElement)
    document.body.classList.remove('loading')
}

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./app', renderApp)
    }
}

renderApp()
