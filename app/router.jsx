// import React from 'react';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// // Layouts
// import MainLayout from './layouts/main-layout.jsx';
// import SearchLayout from './layouts/search-layout.jsx';

// // Pages
// import Home from './layouts/home.jsx';
// import UserList from './layouts/user-list.jsx';
// import UserProfile from './layouts/user-profile.jsx';
// import WidgetList from './layouts/widget-list.jsx';

// export default {
//     render () {
//         return (
//             <Router history={browserHistory}>
//                 <Route component={MainLayout}>
//                     <IndexRoute component={Home} />

//                     <Route path="/" component={Home} />

//                     <Route path="users">
//                         <Route component={SearchLayout}>
//                             <IndexRoute component={UserList} />
//                         </Route>
//                         <Route path=":userId" component={UserProfile} />
//                     </Route>

//                     <Route path="widgets">
//                         <Route component={SearchLayout}>
//                             <IndexRoute component={WidgetList} />
//                         </Route>
//                     </Route>
//                 </Route>
//             </Router>
//         );
//     }
// };

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Router extends Component {
    render () {
        return (
            <ul className="user-list">
                <li><Link to="/users/2">Michael</Link></li>
                <li><Link to="/users/1">Ryan</Link></li>
                <li><Link to="/users/3">Dan</Link></li>
                <li><Link to="/users/4">Matt</Link></li>
                <li><Link to="/users/5">Tobias</Link></li>
                <li><Link to="/users/6">Sebastian</Link></li>
            </ul>
        );
    }
}
