import * as React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import { Auth, Users, Locale, Updates, Globals, Entities, Dashboard, Structure, Settings, NoMatch } from 'containers'

export default class App extends React.Component<{}, {}> {
    state = {
        isOverflow: false
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

    render () {
        return (
            <Router>
                <CoreLayout>
                    <Switch>
                        <Route path="/" exact component={Auth} />
                        <Route path="/users" component={Users} />
                        <Route path="/updates" component={Updates} />
                        <Route path="/locale" component={Locale} />
                        <Route path="/globals" component={Globals} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/structure" component={Structure} />
                        <Route path="/entities" component={Entities} />
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
                </CoreLayout>
            </Router>
        )
    }
}
