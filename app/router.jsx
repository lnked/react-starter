import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

// import { Router, Route, Redirect, IndexRoute } from 'react-router';
// import { createHistory, useBasename } from 'history';
// const browserHistory = useBasename(createHistory)({
//     basename: '/react-starter'
// });

// Layouts
import PageLayout from 'layouts/PageLayout';
import MainLayout from 'layouts/MainLayout';

// Pages
import Home from 'containers/home';
import Users from 'containers/users';
import Widgets from 'containers/widgets';
import NoMatch from 'containers/nomatch';

import Load from 'containers/load';

import Page1 from 'containers/page1';
import Page2 from 'containers/page2';
import Page3 from 'containers/page3';

import CreatePageView from 'containers/createPageView';

export default class App extends Component {

    // static propTypes = {
    //     isOverflow: React.PropTypes.bool
    // }

    // static defaultProps = {
    //     isOverflow: false
    // }

    constructor (props) {
        super(props);
        this.state = {
            isOverflow: false
        };
    }

    componentDidMount () {
        // document.body.classList.toggle('is-overflow', this.props.isOverflow);
        document.body.classList.toggle('is-overflow', this.state.isOverflow);
    }

    // componentWillReceiveProps (nextProps) {
    //     // var sameQuery = this.props.query.page === nextProps.query.page;
    //     document.body.classList.toggle('is-overflow', nextProps.isOverflow);
    // }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('shouldComponentUpdate: ', nextProps, nextState);
    // }

    componentWillUpdate (nextProps, nextState) {
        document.body.classList.toggle('is-overflow', nextState.isOverflow);
    }

    // componentDidUpdate (prevProps, prevState) {
    //     // if (this.state.selectedPage !== this.getQuery().page) {
    //     //     this.setState({ selectedPage: this.getQuery().page });
    //     // }
    //     // if (prevProps.query.page != this.getActiveQuery().page) {
    //     console.log(prevProps, prevState);
    //     console.log('leave:', this.state.isOverflow);
    //     // if (!this.state.isLoading && this.getActiveQuery().page != this.state.currentPage && this.state.currentPage > 0) {
    //     //     console.log(prevProps, prevState);
    //     // }
    // }

    componentWillUnmount () {
        document.body.classList.remove('is-overflow');
    }

    requireAuth (nextState, replace) {
        console.log(replace, nextState.location.pathname);
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

                    <Route path="/page/:slug" component={CreatePageView} />

                    <Route
                        path="/auth"
                        component={Home}
                        onEnter={this.requireAuth}
                    />

                    <Redirect from="/pages" to="/page/hello"/>

                    {/*
                        <Redirect from="/some/where/:id" to="/somewhere/else/2"/>
                        <Route path="/:slug" name="ideas" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route path="users/:userId" component={UserProfile} />
                        <Route name="ideas/:value" handler={CreateIdeaView} />
                        <Link to={{ pathname: '/foo', query: { the: 'query' } }}/>
                        <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} />
                        <Route path="/auth" component={Home} onEnter={this.requireAuth} />

                        <Route path="/" component={SecretStuffComponent}
                            onEnter={(nextState, replace, callback) => { this.requireAuth(nextState, replace, callback) }}>

                        <Route path="inbox" component={Inbox}>
                            <Redirect from="messages/:id" to="/messages/:id" />
                        </Route>

                        <Route component={Inbox}>
                            <Route path="messages/:id" component={Message} />
                        </Route>
                    */}
                </Route>

                <Route
                    path="*"
                    component={NoMatch}
                    onEnter={() => {
                        this.setState({
                            isOverflow: true
                        });
                    }}
                    onLeave={() => {
                        this.setState({
                            isOverflow: false
                        });
                    }}
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
