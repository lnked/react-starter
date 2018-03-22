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

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
renderApp(App)

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any }

if (module.hot) {
    module.hot.accept('./routes', () => { renderApp(App) })
    // module.hot.dispose(() => {
    //     clearInterval(1000)
    // })
}
