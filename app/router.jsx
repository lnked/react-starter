import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router'

// Layouts
import CoreLayout from 'layouts/CoreLayout'
import AuthLayout from 'layouts/AuthLayout'

// Pages
import Auth from 'containers/auth'
import Page1 from 'containers/page1'
import NoMatch from 'containers/nomatch'

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
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/cp/site" />

                <Route path="/" component={AuthLayout}>
                    <IndexRoute component={Auth} />
                    <Route path="/cp" component={Auth} onEnter={this.requireAuth} />
                </Route>

                <Route path="/cp" component={CoreLayout}>
                    <IndexRoute component={Page1} />

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

                    {/*
                        <Route path="/page/:slug" component={CreatePageView} />

                        <Redirect from="/some/where/:id" to="/somewhere/else/2"/>
                        <Route path="/:slug" name="ideas" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route path="users/:userId" component={UserProfile} />
                        <Route name="ideas/:value" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} />
                        <Route path="/auth" component={Home} onEnter={this.requireAuth} />

                        <Route path="/" component={SecretStuffComponent}
                            onEnter={(nextState, replace, callback) => { this.requireAuth(nextState, replace, callback) }}>

                        <Route path="inbox" component={Inbox}>
                            <Redirect from="messages/:id" to="/messages/:id" />
                        </Route>

                        <Route component={Inbox}>
                            <Route path="messages/:id" component={Message} />
                        </Route>
                    */}
                </Route>

                <Route
                    path="*"
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

            </Router>
        )
    }
}
