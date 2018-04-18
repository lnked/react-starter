import * as React from 'react'
// import axios from 'axios'

import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Auth,
    Accounts,
    Assets,
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
    pages: any;
    pathname: string;
    isOverflow: boolean;
}

const routes: any = [
    {
        path: '/',
        exact: true,
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
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

export default class App extends React.Component<{}, S> {
    state = {
        links: [],
        pages: [],
        pathname: '',
        isOverflow: false
    }

    componentDidMount () {
        // const path = location.pathname.split('/')

        // if (typeof (path[1]) !== 'undefined') {
        //     this.handleChangePath(path[1], location.pathname)
        // }
    }

    handleChangePath = (page: string, pathname: string) => {
        console.log(page, pathname)

        // if (pathname !== this.state.pathname) {
        //     axios
        //         .get(`/api/${page}`)
        //         .then((response) => {
        //             if (typeof (response.data.json) !== 'undefined') {
        //                 this.setState({ ...this.state, links: response.data.json, pathname })
        //             }
        //         })
        //         .catch((err) => {
        //             console.log('err: ', err)
        //         })
        // } else {
        //     this.setState({ ...this.state, links: [] })
        // }

        return ''
    }

    render () {
        const { links } = this.state

        return (
            <Router>
                <CoreLayout links={links}>
                    <Switch>

                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) => {
                                if (rest.path !== this.state.pathname) {
                                    if (rest.path) {
                                        console.log('render ', rest.path)
                                        // this.handleChangePath(rest.path)
                                    }

                                    return <Component {...props} className={`fade fade-${status}`} />
                                }

                                return ''
                            }} />
                        ))}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}
