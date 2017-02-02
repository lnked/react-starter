import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main-layout.jsx';
import SearchLayout from './layouts/search-layout.jsx';

// Pages
import Home from './layouts/home.jsx';
import UserList from './layouts/user-list.jsx';
import UserProfile from './layouts/user-profile.jsx';
import WidgetList from './layouts/widget-list.jsx';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <IndexRoute component={Home} />

            <Route path="/" component={Home} />

            <Route path="users">
                <Route component={SearchLayout}>
                    <IndexRoute component={UserList} />
                </Route>
                <Route path=":userId" component={UserProfile} />
            </Route>

            <Route path="widgets">
                <Route component={SearchLayout}>
                    <IndexRoute component={WidgetList} />
                </Route>
            </Route>
        </Route>
    </Router>
);
