import * as React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { history } from 'helpers'

import { ErrorBoundary } from 'components'

import { CoreLayout } from 'layouts'

import { Provider } from 'mobx-react'

import { createStore } from 'store'

import { routes } from 'settings/routes'

const initialState = (window && window.__INITIAL_STATE__) || {}
const stores = createStore(history, initialState)

export class App extends React.Component<void, void> {
    renderDevTool = () => {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default
            return <DevTools />
        }

        return null
    }

    render () {
        return (
            <Provider {...stores}>
                <ErrorBoundary>
                    <Router>
                        <CoreLayout>
                            <Switch>
                                {routes && routes.map(({
                                    title,
                                    description,
                                    component: Component,
                                    ...rest
                                }: any, idx: number) => (
                                    // <Route key={index} {...rest} />
                                    <Route key={idx} {...rest} render={(props: any) => (
                                        <React.Fragment>
                                            <Helmet>
                                                <title>{title}</title>
                                                <meta name="description" content={description} />
                                            </Helmet>

                                            <Component {...props}/>
                                        </React.Fragment>
                                    )}/>
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
