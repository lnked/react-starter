/*eslint-disable*/
import * as React from 'react'

import { hot } from 'react-hot-loader'

import { routes } from 'settings/routes'

import initState from 'state'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

import { Preloader } from 'utils'

import { Header } from 'segments'

class App extends React.Component<{}, {}> {
    render () {
        console.log('initState: ', initState)
        console.log('process.env: ', process.env)

        return (
            <Router>
                <CoreLayout>
                    <Header />

                    <Switch>

                        {routes.map(({ resolve, ...rest }: any, key) => {
                            if (resolve) {
                                rest.component = Preloader({
                                    loader: resolve
                                })
                            }

                            return <Route {...rest} key={key} />
                        })}

                        {/*
                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}
                        */}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}

export default hot(module)(App)
