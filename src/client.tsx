import * as React from 'react'
import { render } from 'react-dom'
import 'styles/client.scss'
// import { App } from './app'

const rootElement = document.getElementById('app')

if (rootElement == null) {
    throw new Error('No root element')
}

const renderApp = () => {
    // render(<App />, rootElement)
    render(<div>Hello worlds</div>, rootElement)
    document.body.classList.remove('loading')
}

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept('./app', renderApp)
    }
}

renderApp()
