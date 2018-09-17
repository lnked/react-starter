/* global __DEV__ */

import * as React from 'react'
import 'styles/client.scss'

import { Router, Route, Switch } from 'react-router-dom'

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import { MobXDevTools } from 'utils'

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

export class App extends React.Component<void, void> {
    renderDevTools = () => {
        if (__DEV__) {
            return (
                <MobXDevTools />
            )
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

                            {this.renderDevTools()}
                        </CoreLayout>
                    </Router>
                </ErrorBoundary>
            </Provider>
        )
    }
}

export default App
