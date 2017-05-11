import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route
    // Switch
    // Redirect
    // IndexRoute
} from 'react-router-dom'

// Layouts
import {CoreLayout} from 'layouts'
// import {CoreLayout, AuthLayout} from 'layouts'

// Pages
// import {Auth, Page1, Load, NoMatch} from 'containers'
import {Load} from 'containers'

// function def(promise) {
//   return promise.then(cmp => {
//     console.info('Dynamic loaded by route: ', cmp.default.displayName) // для тестирования можете логировать имя компонента
//     return cmp.default
//   })
// }

// ...
// <Route path='/signin' getComponent={() => def(import('../containers/SigninContainer'))} />
// ...

// const routes = [
//     { path: '/',
//         component: Page1
//     },
//     { path: '/tacos',
//         component: Load,
//         routes: [
//             { path: '/tacos/bus',
//                 component: Load
//             },
//             { path: '/tacos/cart',
//                 component: Load
//             }
//         ]
//     }
// ]

// <Route path="/cp" component={CoreLayout}>
//     <IndexRoute component={Page1} />
//     <Route path="settings" component={Load} />

//     <Route path="site" component={Page1}>
//         <Route path="structure" component={Page1} />
//         <Route path="menu" component={Page1} />
//         <Route path="module" component={Page1} />
//         <Route path="storage" component={Page1} />
//         <Route path="settings" component={Page1} />
//     </Route>

//     <Route path="marketing" component={Page1}>
//         <Route path="dashboard" component={Page1} />
//         <Route path="invoices" component={Page1} />
//         <Route path="leads" component={Page1} />
//         <Route path="contacts" component={Page1} />
//         <Route path="todo" component={Page1} />
//         <Route path="analytics" component={Page1} />
//     </Route>

//     <Route path="seo" component={Page1}>
//         <Route path="analytics" component={Page1} />
//         <Route path="pageWeight" component={Page1} />
//         <Route path="meta" component={Page1} />
//         <Route path="hfu" component={Page1} />
//         <Route path="social" component={Page1} />
//         <Route path="sitemap" component={Page1} />
//         <Route path="robots" component={Page1} />
//         <Route path="counters" component={Page1} />
//     </Route>

//     <Route path="users" component={Page1}>
//         <Route path="list" component={Page1} />
//         <Route path="permissions" component={Page1} />
//         <Route path="roles" component={Page1} />
//         <Route path="settings" component={Page1} />
//     </Route>

//     <Route path="shop" component={Page1}>
//         <Route path="orders" component={Page1} />
//         <Route path="catalog" component={Page1} />
//         <Route path="customers" component={Page1} />
//         <Route path="affiliate" component={Page1} />
//         <Route path="discounts" component={Page1} />
//         <Route path="exchange" component={Page1} />
//         <Route path="taxes" component={Page1} />
//         <Route path="settings" component={Page1} />
//     </Route>

//     <Route path="system" component={Page1}>
//         <Route path="extensions" component={Page1} />
//         <Route path="themes" component={Page1} />
//         <Route path="update" component={Page1} />
//         <Route path="info" component={Page1} />
//         <Route path="mailers" component={Page1} />
//         <Route path="settings" component={Page1} />
//     </Route>
// </Route>

// <Route path='/reports' component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
//   <Route getComponent={() => def(import('../containers/WiwthSidebar'))}>
//     <Route path='/reports/a' getComponent={() => def(import('../containers/A'))} />
//     <Route path='/reports/b' getComponent={() => def(import('../containers/B'))} />
//   </Route>
//   <Route getComponent={() => def(import('../containers/WithoutSideber'))}>
//     <Route path='/reports/c' getComponent={() => def(import('../containers/C'))} />
//   </Route>
// </Route>

// function def(promise) {
//   return promise.then(cmp => {
//     console.info('Dynamic loaded by route: ', cmp.default.displayName) //eslint-disable-line no-console
//     return cmp.default
//   })
// }
// ...
// <Route path='/signup' getComponent={() => def(import('../containers/SignupContainer'))} />

export default class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isOverflow: false
        }
    }

    componentDidMount () {
        document.body.classList.toggle('is-overflow', this.state.isOverflow)
    }

    componentWillUpdate (nextProps, nextState) {
        document.body.classList.toggle('is-overflow', nextState.isOverflow)
    }

    componentWillUnmount () {
        document.body.classList.remove('is-overflow')
    }

    requireAuth (nextState, replace) {
        console.log(replace, nextState.location.pathname)
    }

    render () {
        // <Router history={this.props.history}>
        //     <div>
        //         <Route exact path="/" name="Home" component={Index} />
        //         <Route path="/colors" component={Palette} />
        //         <Route path="/icons" component={Icons} />
        //         <Route path="/forms" component={Forms} />
        //         <Route path="/other" component={Other} />
        //         <Route path="/dashboard" component={Dashboard} />

        //         <Switch>
        //             <Redirect from="/dashboard" to="/dashboard/my-account" />
        //             <Route exact path="/dashboard/my-account" />
        //             <Route exact path="/dashboard/service-request" />
        //             <Route exact path="/dashboard/payments" />
        //             <Route exact path="/dashboard/settings" />
        //         </Switch>
        //     </div>
        // </Router>

        // <CoreLayout>
        //     <Route path="/cp/site" component={Load} />
        //     <Route path="/cp/site/structure" component={Page1} />
        //     <Route path="/cp/site/menu" component={Auth} />
        //     <Route path="/cp/site/module" component={Page1} />
        //     <Route path="/cp/site/storage" component={Page1} />
        //     <Route path="/cp/site/settings" component={Page1} />
        // </CoreLayout>

        return (
            <Router basename="/cp">
                <div>
                    {/*
                        <IndexRoute component={Page1} />
                        <Route path="/cp" component={Load}/>
                        <Route exact path="/" component={Page1}/>
                        <Redirect from="/" to="/cp" />
                        <Route exact path="/cp" component={Auth} />
                    */}

                    <CoreLayout>
                        <Route path="/" component={Load} />
                    </CoreLayout>

                    {/*
                    <CoreLayout>
                        <Route path="/cp/site" component={Load} />
                        <Route path="/cp/site/structure" component={Page1} />
                        <Route path="/cp/site/menu" component={Auth} />
                        <Route path="/cp/site/module" component={Page1} />
                        <Route path="/cp/site/storage" component={Page1} />
                        <Route path="/cp/site/settings" component={Page1} />
                    </CoreLayout>

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
                    />
                    */}
                </div>

                {/*
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} render={props => (
                        <route.component {...props} routes={route.routes}/>
                    )}/>
                ))}

                <RouteWithSubRoutes key={i} {...route}/>
                <Switch>

                    <Route path="/cp" component={CoreLayout} />

                    <Route path="/" component={AuthLayout}>
                        <IndexRoute component={Auth} />
                        <Route path="/cp" component={Auth} />
                    </Route>

                    <Redirect from="/" to="/cp/site" />
                    <Route path="/cp" component={CoreLayout}>
                        <IndexRoute component={Page1} />

                        <Route path="settings" component={Load} />

                        <Route path="site" component={Page1}>
                            <Route path="structure" component={Page1} />
                            <Route path="menu" component={Page1} />
                            <Route path="module" component={Page1} />
                            <Route path="storage" component={Page1} />
                            <Route path="settings" component={Page1} />
                        </Route>
                    </Route>

                    <Route path="main" component={Page1}/>
                    <Route path="company" component={Load}/>

                </Switch>
                */}

            </Router>
        )
    }
}

/*
export default class App extends Component {
    render () {
        // <Router history={browserHistory} routes={routes} />,
        // <Route path="/cp" component={Auth} onEnter={this.requireAuth} />
        return (
            <Router>
                <div>
                    <Route path="/cp" component={CoreLayout}>
                        <IndexRoute component={Page1} />
                        <Route path="settings" component={Load} />

                        <Route path="site" component={Page1}>
                            <Route path="structure" component={Page1} />
                            <Route path="menu" component={Page1} />
                            <Route path="module" component={Page1} />
                            <Route path="storage" component={Page1} />
                            <Route path="settings" component={Page1} />
                        </Route>

                        <Route path="marketing" component={Page1}>
                            <Route path="dashboard" component={Page1} />
                            <Route path="invoices" component={Page1} />
                            <Route path="leads" component={Page1} />
                            <Route path="contacts" component={Page1} />
                            <Route path="todo" component={Page1} />
                            <Route path="analytics" component={Page1} />
                        </Route>

                        <Route path="seo" component={Page1}>
                            <Route path="analytics" component={Page1} />
                            <Route path="pageWeight" component={Page1} />
                            <Route path="meta" component={Page1} />
                            <Route path="hfu" component={Page1} />
                            <Route path="social" component={Page1} />
                            <Route path="sitemap" component={Page1} />
                            <Route path="robots" component={Page1} />
                            <Route path="counters" component={Page1} />
                        </Route>

                        <Route path="users" component={Page1}>
                            <Route path="list" component={Page1} />
                            <Route path="permissions" component={Page1} />
                            <Route path="roles" component={Page1} />
                            <Route path="settings" component={Page1} />
                        </Route>

                        <Route path="shop" component={Page1}>
                            <Route path="orders" component={Page1} />
                            <Route path="catalog" component={Page1} />
                            <Route path="customers" component={Page1} />
                            <Route path="affiliate" component={Page1} />
                            <Route path="discounts" component={Page1} />
                            <Route path="exchange" component={Page1} />
                            <Route path="taxes" component={Page1} />
                            <Route path="settings" component={Page1} />
                        </Route>

                        <Route path="system" component={Page1}>
                            <Route path="extensions" component={Page1} />
                            <Route path="themes" component={Page1} />
                            <Route path="update" component={Page1} />
                            <Route path="info" component={Page1} />
                            <Route path="mailers" component={Page1} />
                            <Route path="settings" component={Page1} />
                        </Route>
                    </Route>

                    * /}
                </div>

            </Router>
        )
    }
}
*/

