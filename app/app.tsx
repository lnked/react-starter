import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'app.scss'

import App from './routes'

const renderApp = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

renderApp(App)

document.body.classList.remove('loading')

declare var module: { hot: any }

if (module.hot) {
    module.hot.accept('./routes', () => {
        alert('render')
        renderApp(App)
    })
    module.hot.dispose(() => {
        alert('dispose')
        clearInterval(1000)
    })
}
