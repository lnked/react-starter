'use strict';

const routes = [];

module.exports.config = routes;

// <Router>
// <div>
//   <Link to="/">Home</Link>{' '}
//   <Link to={{pathname: '/about'}}>About</Link>{' '}
//   <Link to="/contact">Contact</Link>
  
//   <Switch>
//     <Route path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route
//       path="/contact"
//       render={() => <h1>Contact Us</h1>} />
//     <Route path="/blog" children={({match}) => (
//       <li className={match ? 'active' : ''}>
//         <Link to="/blog">Blog</Link>
//       </li>)} />
//     <Route render={() => <h1>Page not found</h1>} />
//   </Switch>
// </div>
// </Router>

import React from 'react';
import { Route } from 'react-router';
 
import {
  App,
  About,
  Products,
  Product,
  Contact,
  Nested,
} from './components';
 
const NotFound = () => <h4>Not found 😞</h4>;
 
export const routes = (
  <Route path='/' title='App' component={App}>
    <Route path='about' title='App - About' component={About} />
    <Route path='contact' title='App - Contact' component={Contact} />
    <Route path='products' title='App - Products' component={Products}>
      <Route path='product' title='App - Products - Product' component={Product}>
        <Route path='nested' title='App - Products - Product - Nested' component={Nested} />
      </Route>
    </Route>
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);
 
export default routes;


// App
//
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
 
// Since we're rendering static files don't forget to use browser history. 
// Server's don't get the URL hash during a request. 
import createBrowserHistory from 'history/lib/createBrowserHistory';
 
// Import your routes so that you can pass them to the <Router /> component 
import routes from './routes.js';
 
render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
