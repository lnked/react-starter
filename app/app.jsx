import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import PageLayout from 'layouts/PageLayout';
import MainLayout from 'layouts/MainLayout';

import Home from 'pages/home';

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

        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />

            <Route path="/main" component={Home} />

            <Route path="/users" component={Users} />
            <Route path="/widgets" component={Widgets} />
        </Route>

        <Route path="*" component={NoMatch} />
    </Router>
), document.getElementById('root'));
