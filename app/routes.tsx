import * as React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Auth,
    Shop,
    Tasks,
    Assets,
    Locale,
    Updates,
    Globals,
    Entities,
    Accounts,
    Dashboard,
    Structure,
    Settings,
    Extensions,
    NoMatch
} from 'containers'

export default class App extends React.Component<{}, {}> {
    state = {
        isOverflow: false
    }

    componentDidMount () {
        document.body.classList.toggle('is-overflow', this.state.isOverflow)
    }

    componentWillUpdate (nextProps: any, nextState: any): any {
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

        return (
            <Router>
                <CoreLayout>
                    <Switch>
                        <Route exact path="/" render={() => (
                            loggedIn ? (
                                <Redirect to="/dashboard" />
                            ) : (
                                <Auth />
                            )
                        )} />

                        <Route path="/accounts" component={Accounts} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/assets" component={Assets} />
                        <Route path="/updates" component={Updates} />
                        <Route path="/locale" component={Locale} />
                        <Route path="/globals" component={Globals} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/structure" component={Structure} />
                        <Route path="/entities" component={Entities} />
                        <Route path="/extensions" component={Extensions} />
                        <Route path="/settings" component={Settings} />

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
            </Router>
        )
    }
}
