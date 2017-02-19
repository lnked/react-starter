import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

// Layouts
import PageLayout from 'layouts/PageLayout';
import MainLayout from 'layouts/MainLayout';

// Pages
import Home from 'pages/home';
import Users from 'pages/users';
import Widgets from 'pages/widgets';
import NoMatch from 'pages/nomatch';

import Load from 'pages/load';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';
import CreatePageView from 'pages/createPageView';

export default class App extends Component {

    static propTypes = {
        isOverflow: React.PropTypes.bool
    }

    static defaultProps = {
        isOverflow: true
    }

    componentDidMount () {
        document.body.classList.toggle('is-overflow', this.props.isOverflow);
    }

    componentWillReceiveProps (nextProps) {
        document.body.classList.toggle('is-overflow', nextProps.isOverflow);
    }

    componentWillUnmount () {
        document.body.classList.remove('is-overflow');
    }

    requireAuth ({ getStore, nextState, replaceState }) {
    // requireAuth (nextState, transition) {
        if (getStore().auth.grant.expired) {
            console.log(replaceState);
            alert(nextState.location.pathname);
            // replaceState({ nextPathname: nextState.location.pathname });
        }
    }

    // requireAuth(nextState, replace) {
    //     const { store } = this.props;
    //     const { getState, dispatch } = store;

    //     if (!isLoggedIn(getState())) {

    //       dispatch(hasSession())
    //         .catch((error) => {
    //           console.log('Replace');
    //           replace('/login');
    //         });

    //     } else {
    //       console.log('OK');
    //     }
    //   }

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

                    <Route path="/load" component={Load} />

                    <Route path="page1" component={Page1} />
                    <Route path="page2" component={Page2} />
                    <Route path="page3" component={Page3} />
                    <Route path="/page/:slug" name="pages" component={CreatePageView} />

                    <Redirect from="/pages" to="/page/hello"/>

                    {/*
                        <Redirect from="/some/where/:id" to="/somewhere/else/2"/>
                        <Route path="/:slug" name="ideas" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route path="users/:userId" component={UserProfile} />
                        <Route name="ideas/:value" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} />

                        <Route path="/" component={SecretStuffComponent}
                            onEnter={(nextState, replace, callback) => { this.requireAuth(nextState, replace, callback) }}>
                    */}
                </Route>

                <Route path="/auth" component={Home} onEnter={this.requireAuth} />

                <Route
                    path="*"
                    component={NoMatch}
                    onEnter={() => {}}
                    onLeave={() => {}}
                />

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
