/* global __DEV__ */

import * as React from 'react'
import 'styles/client.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import DevTools, { configureDevtool } from 'mobx-react-devtools'

import { createStore } from 'store'

import { Provider } from 'mobx-react'

import { Helmet } from 'react-helmet'

import { CoreLayout } from 'layouts'

import { ErrorBoundary } from 'components'

import { browserHistory } from 'helpers'

import { routes } from 'settings/routes'

// Stores
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const initialState = (window && window.__INITIAL_STATE__) || {}

const stores = createStore(routingStore, initialState)

configureDevtool({
    logEnabled: true,
    updatesEnabled: false,
    graphEnabled: false,
    logFilter: change => change.type === 'reaction',
})

export class App extends React.Component<void, void> {
    renderDevTool = () => {
        if (__DEV__) {
            // const DevTools: any = require('mobx-react-devtools').default
            return <DevTools noPanel />
        }

        return null
    }

    renderRoute = ({ title, keywords, description, component: Component, ...rest }: Route) => (
        <Route key={rest.path} {...rest} render={(props: any) => (
            <React.Fragment>
                <Helmet
                    title={title}
                    meta={[
                        {
                            name: 'description',
                            content: description,
                        },
                        {
                            name: 'keywords',
                            content: keywords,
                        },
                    ]}
                />

                <Component {...props} />
            </React.Fragment>
        )} />
    )

    render () {
        return (
            <Provider {...stores}>
                <ErrorBoundary>
                    <Router history={history}>
                        <CoreLayout>
                            <Switch>
                                {routes && routes.map(this.renderRoute)}
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
