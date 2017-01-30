import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

import { Hello, Main, Test, Welcome } from './pages';

console.log(Hello, Main, Test, Welcome);

render () {
    return (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>

            <IndexRoute component={Home} />

            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/widgets" component={Widgets} />

            <Route path="users/:userId" component={UserProfile} /> // this.props.params.userId

            <Route component={SearchLayout}>
                <Route path="users" component={UserList} />
                <Route path="widgets" component={WidgetList} />
            </Route> 

            <Route path="product" component={ProductLayout}>
                <IndexRoute component={ProductProfile} />

                <Route path="settings" component={ProductSettings} />
                <Route path="inventory" component={ProductInventory} />
                <Route path="orders" component={ProductOrders} />
            </Route> 
        </Route>
    </Router>
    );
};

// export default Routes extends Component {
//     render () {
//         return (
//             <Router history={browserHistory} className={styles.navbar}>
//                 <Route path="/" component={App}>
//                     <IndexRoute component={Home} />
//                     <Route path="welcome" component={Welcome} />
//                     <Route path="home" component={Home} />
//                     <Route path="users" component={Users} />
//                     <Route path="user" component={User} />
//                 </Route>
//             </Router>
//         );
//     }
// }