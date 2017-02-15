import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import PageLayout from 'layouts/PageLayout';

// require('./components/Hello').default
// const routes = [{
//     path:"/",
//     getComponents(location, callback) {
//         require.ensure([], function (require) {
//             callback(null, require('./components/Hello').default)
//         })
//     }
// }];

class Home extends Component {
    render () {
        return (<h1>Welcome to Home Page</h1>);
    }
};

class Users extends Component {
    render () {
        return (<h1>Welcome to the Users Page</h1>);
    }
};

class Widgets extends Component {
    render () {
        return (<h1>Welcome to the Widgets Page</h1>);
    }
};

class NoMatch extends Component {
    render () {
        return (<h1>:( 404 error</h1>);
    }
};

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page"> > Page</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/widgets">Widgets</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

class Page1 extends Component {
    render () {
        return (<h1>Welcome to Page1</h1>);
    }
};

class Page2 extends Component {
    render () {
        return (<h1>Welcome to Page2</h1>);
    }
};

class Page3 extends Component {
    render () {
        return (<h1>Welcome to Page3</h1>);
    }
};

render((
    <Router history={browserHistory}>
        
        <Route path="/page" component={PageLayout}>
            <IndexRoute component={Page1} />

            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
            <Route path="page3" component={Page3} />
        </Route>

        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="/main" component={Home} />

            <Route path="/users" component={Users} />
            <Route path="/widgets" component={Widgets} />
        </Route>

        <Route path="*" component={NoMatch} />
    </Router>
), document.getElementById('root'));
