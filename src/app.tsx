import * as React from 'react'

import { routes } from 'settings/routes'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import { ErrorBoundary } from 'components'

import { CoreLayout } from 'layouts'

import { createStore } from 'store'

import { Provider } from 'mobx-react'

const initialState = {
    app: { query: 'initial state query' },
    ui: { type: 'test 1' },
}

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStore(history, initialState)

export class App extends React.Component<{}, {}> {
    renderDevTool = () => {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default
            return <DevTools />
        }

        return null
    }

    render () {
        return (
            <Provider {...rootStore}>
                <ErrorBoundary>
                    <Router>
                        <CoreLayout>
                            <Switch>
                                {routes.map(({ ...rest }: any, index: number) => (
                                    <Route key={index} {...rest} />
                                ))}
                            </Switch>

                            {this.renderDevTool()}
                        </CoreLayout>
                    </Router>
                </ErrorBoundary>
            </Provider>
        )
    }
}

export default App
