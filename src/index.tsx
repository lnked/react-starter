import * as React from 'react'
import { render } from 'react-dom'
import 'index.scss'

const rootElement = document.getElementById('app')

if (rootElement == null) {
    throw new Error('No root element')
}

const renderApp = async () => {
    const { App } = await import('./app' /* webpackChunkName: "app" */)
    render(<App />, rootElement)
    document.body.classList.remove('loading')
}

declare var module: {
    hot: {
        accept (paths: string, callback: () => void | Promise<void>): void;
    }
}

if (module.hot) {
    module.hot.accept('./app', renderApp)
}

renderApp()
