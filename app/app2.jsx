import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from 'reducers';
import { App, Foo, Bar } from 'pages';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(
    reducer
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Foo}/>
                    <Route path="foo" component={Foo}/>
                    <Route path="bar" component={Bar}/>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
