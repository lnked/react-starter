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

// Segments
import {
    Header
} from 'segments'

// Components
import { Spinner } from 'components'

class App extends React.Component<{}, {}> {
    render () {
        console.log('initState: ', initState)
        console.log('process.env: ', process.env)

        return (
            <Router>
                <CoreLayout>
                    <Header />

                    <Spinner />

                    <Switch>

                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}

export default hot(module)(App)
