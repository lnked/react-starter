import { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

// Layouts
import PageLayout from 'layouts/PageLayout';
import MainLayout from 'layouts/MainLayout';

// Pages
import Home from 'pages/home';
import Users from 'pages/users';
import Widgets from 'pages/widgets';
import NoMatch from 'pages/nomatch';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';

export default class App extends Component {
    render () {
        return (
            <Router history={browserHistory}>

                <Route path="/" component={MainLayout}>
                    <IndexRoute component={Home} />

                    <Route path="/main" component={Home} />

                    <Route path="/users" component={Users} />
                    <Route path="/widgets" component={Widgets} />
                </Route>

                <Route path="/page" component={PageLayout}>
                    <IndexRoute component={Page1} />

                    <Route path="page1" component={Page1} />
                    <Route path="page2" component={Page2} />
                    <Route path="page3" component={Page3} />
                </Route>

                <Route path="*" component={NoMatch} />

            </Router>
        );
    }
}

// /* eslint-disable global-require */

// // The top-level (parent) route
// export default {
//     path: '/',

//     children: [
//         require('./home').default,
//         require('./contact').default,
//         require('./login').default,
//         require('./register').default,
//         require('./about').default,
//         require('./privacy').default,
//         require('./admin').default,
//         require('./notFound').default,
//     ],

//     async action({ next }) {
//         // Execute each child route until one of them return the result
//         const route = await next();

//         // Provide default values for title, description etc.
//         route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
//         route.description = route.description || '';

//         return route;
//     }
// };
