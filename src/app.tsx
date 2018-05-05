import * as React from 'react'

import { hot } from 'react-hot-loader'

import initState from './state'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    NoMatch,
    MainPage,
    ChangelogPage
} from 'containers'

// Segments
import {
    Header
} from 'segments'

// Components
import { Spinner } from 'components'

const routes: any = [
    {
        path: '/',
        exact: true,
        component: MainPage
    }, {
        path: '/changelog',
        component: ChangelogPage
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

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
