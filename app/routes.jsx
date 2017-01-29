import React, { Component } from 'react';

// import App from '../app/index';
// import Users from '../users/index';
// import User from '../user/index';
// import Home from '../home/index';
// import Welcome from '../welcome/index';

// import { App, Users, User, Home, Welcome } from './pages';
import { Hello, Main, Test, Welcome } from './pages';

console.log(Hello, Main, Test, Welcome);

export default Routes extends Component {
    render () {
        return (
            <Router history={browserHistory} className={styles.navbar}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="welcome" component={Welcome} />
                    <Route path="home" component={Home} />
                    <Route path="users" component={Users} />
                    <Route path="user" component={User} />
                </Route>
            </Router>
        );
    }
}