// import React, { Component } from 'react';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// // // Layouts
// // import MainLayout from './layouts/main-layout.jsx';
// // import SearchLayout from './layouts/search-layout.jsx';

// // // Pages
// // import Home from './layouts/home.jsx';
// // import UserList from './layouts/user-list.jsx';
// // import UserProfile from './layouts/user-profile.jsx';
// // import WidgetList from './layouts/widget-list.jsx';

// export default {
//     render(
//         <Router history={browserHistory}>
//             <Route component={MainLayout}>
//                 <IndexRoute component={Home} />

//                 <Route path="/" component={Home} />

//                 <Route path="users">
//                     <Route component={SearchLayout}>
//                         <IndexRoute component={UserList} />
//                     </Route>
//                     <Route path=":userId" component={UserProfile} />
//                 </Route>

//                 <Route path="widgets">
//                     <Route component={SearchLayout}>
//                         <IndexRoute component={WidgetList} />
//                     </Route>
//                 </Route>
//             </Route>
//         </Router>
//     );
// };

/* eslint-disable global-require */

// The top-level (parent) route
export default {
    path: '/',

    children: [
        require('./home').default,
        require('./contact').default,
        require('./login').default,
        require('./register').default,
        require('./about').default,
        require('./privacy').default,
        require('./admin').default,
        require('./notFound').default,
    ],

    async action({ next }) {
        // Execute each child route until one of them return the result
        const route = await next();

        // Provide default values for title, description etc.
        route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
        route.description = route.description || '';

        return route;
    }
};