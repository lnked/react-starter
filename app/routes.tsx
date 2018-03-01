import * as React from 'react'

import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Accounts,
    Assets,
    Auth,
    Dashboard,
    Entities,
    Extensions,
    Globals,
    Locale,
    NoMatch,
    Settings,
    Shop,
    Structure,
    Tasks,
    Updates
} from 'containers'

const routes: any = [
    {
        exact: true,
        path: '/',
        component: Auth
    }, {
        path: '/accounts',
        component: Accounts
    }, {
        path: '/shop',
        component: Shop
    }, {
        path: '/tasks',
        component: Tasks
    }, {
        path: '/assets',
        component: Assets
    }, {
        path: '/updates',
        component: Updates
    }, {
        path: '/locale',
        component: Locale
    }, {
        path: '/globals',
        component: Globals
    }, {
        path: '/dashboard',
        component: Dashboard
    }, {
        path: '/structure',
        component: Structure
    }, {
        path: '/entities',
        component: Entities
    }, {
        path: '/extensions',
        component: Extensions
    }, {
        path: '/settings',
        component: Settings
    }
]

export default class App extends React.Component<{}, {}> {
    state = {
        isOverflow: false
    }

    componentDidMount () {
        document.body.classList.toggle('is-overflow', this.state.isOverflow)
    }

    componentWillUpdate ({ nextState }: any) {
        document.body.classList.toggle('is-overflow', nextState.isOverflow)
    }

    componentWillUnmount () {
        document.body.classList.remove('is-overflow')
    }

    render () {
        const loggedIn = true

        // <Redirect to={{
        //     pathname: '/login',
        //     search: '?utm=your+face',
        //     state: { referrer: currentLocation }
        // }} />

        const routeComponents: any = routes.map((props, key) => {
            console.log('props: ', props)

            return (
                <Route {...props} key={key} />
            )
        })

        return (
            <BrowserRouter>
                <CoreLayout>
                    <Switch>
                        <Route exact path="/" render={() => (
                            loggedIn ? (
                                <Redirect to="/dashboard" />
                            ) : (
                                <Auth />
                            )
                        )} />

                        { routeComponents }

                        <Route
                            component={NoMatch}
                            onEnter={() => {
                                this.setState({
                                    isOverflow: true
                                })
                            }}
                            onLeave={() => {
                                this.setState({
                                    isOverflow: false
                                })
                            }}
                            status={404}
                            statusCode={404}
                        />
                    </Switch>

                    <Switch>
                        <Redirect from="/accounts/:id" to="/accounts/profile/:id" />
                        <Route path="/accounts/profile/:id" component={Accounts} />
                    </Switch>
                </CoreLayout>
            </BrowserRouter>
        )
    }
}
