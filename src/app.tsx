/*eslint-disable*/
import * as React from 'react'

import { hot } from 'react-hot-loader'

// import { routes } from 'settings/routes'

import initState from 'state'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Loadable from 'react-loadable'

// Layouts
import { CoreLayout } from 'layouts'

// Segments
import {
    Header
} from 'segments'

// Components
import { Spinner } from 'components'

const Loading = () => <div>Loading...</div>

const MainPage = Loadable({
    loader: () => import(/* webpackChunkName: "MainPage" */ 'containers/main-page'),
    loading: Loading
})

const ChangelogPage = Loadable({
    loader: () => import(/* webpackChunkName: "ChangelogPage" */ 'containers/changelog-page'),
    loading: Loading
})

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

                        <Route path="/" exact component={MainPage} />
                        <Route path="/changelog" exact component={ChangelogPage} />

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
