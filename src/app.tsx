import * as React from 'react'
import 'styles/client.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import { Helmet } from 'react-helmet'

import { browserHistory } from 'helpers'

import { ErrorBoundary } from 'components'

import { CoreLayout } from 'layouts'

import { Provider } from 'mobx-react'

import { createStore } from 'store'

import { routes } from 'settings/routes'

const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const initialState = (window && window.__INITIAL_STATE__) || {}

const stores = createStore(routingStore, initialState)

export class App extends React.Component<void, void> {
    renderDevTool = () => {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default
            return <DevTools />
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
