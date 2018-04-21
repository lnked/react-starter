import * as React from 'react'

import { hot } from 'react-hot-loader'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    NoMatch
} from 'containers'

const routes: any = [
    {
        path: '/',
        exact: true,
        component: NoMatch
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

class App extends React.Component<{}, {}> {
    render () {
        return (
            <Router>
                <CoreLayout>
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
