import * as React from 'react'

import { routes } from 'settings/routes'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import { createBrowserHistory } from 'history'

import { createStores } from 'store'

import { Provider } from 'mobx-react'

import { CoreLayout } from 'layouts'

import { Header } from 'segments'

const defaultStore = []

// prepare MobX stores
const history = createBrowserHistory()
const rootStore = createStores(history, defaultStore)

export class App extends React.Component<{}, {}> {
    render () {
        return (
            <Provider {...rootStore}>
                <CoreLayout>
                    <Router>
                        <Header />

                        <Switch>
                            {routes.map(({ ...rest }: any, key) =>
                                <Route key={key} {...rest} />
                            )}

                            {/*
                            {routes.map(({ component: Component, ...rest }: any, key) => (
                                <Route {...rest} key={key} render={(props: any) =>
                                    <Component {...props} className={`fade fade-${status}`} />
                                } />
                            ))}
                            */}
                        </Switch>
                    </Router>
                </CoreLayout>
            </Provider>
        )
    }
}
