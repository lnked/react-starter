import * as React from 'react'

import {
    BrowserRouter as Router,
    Route,
    browserHistory
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import { Auth, Home } from 'containers'

export default class App extends React.Component<{}, {}> {
    render () {
        return (
            <Router history={browserHistory}>
                <CoreLayout>
                    <Route exact path="/" component={Auth}/>
                    <Route path="/dashboard" component={Home}/>
                    <Route path="/structure" component={Auth}/>
                    <Route path="/settings" component={Home}/>
                </CoreLayout>
            </Router>
        )
    }
}
