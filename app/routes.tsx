import * as React from 'react'
import * as axios from 'axios'

import {
    BrowserRouter as Router,
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

interface S {
    links: any;
    isOverflow: boolean;
}

const routes: any = [
    {
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

export default class App extends React.Component<{}, S> {
    state = {
        links: [],
        isOverflow: false
    }

    componentDidMount () {
        this.handleLoadLinks()
    }

    handleLoadLinks = () => {
        const path = location.pathname.split('/')

        if (typeof (path[1]) !== 'undefined') {
            const page = path[1]

            axios
                .get(`http://react-template.loc/api/${page}`)
                .then((response) => {
                    if (typeof (response.data.json) !== 'undefined') {
                        this.setState({ links: response.data.json })
                    }
                })
                .catch((err) => {
                    console.log('err: ', err)
                })
        }
    }

    render () {
        const loggedIn = true

        const { links } = this.state

        const routeComponents: any = routes.map((props, key) =>
            <Route {...props} key={key} />
        )

        return (
            <Router>
                <CoreLayout links={links}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                loggedIn ? <Redirect to="/dashboard" /> : <Auth />
                            )}
                        />

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
                </CoreLayout>
            </Router>
        )
    }
}
