import App from 'containers/App';

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}


export default {
 component: App,
 childRoutes: [
   {
     path: '/',
     getComponent(location, cb) {
       System.import('pages/Home').then(loadRoute(cb)).catch(errorLoading);
     }
   },
   {
     path: 'blog',
     getComponent(location, cb) {
       System.import('pages/Blog').then(loadRoute(cb)).catch(errorLoading);
     }
   },
   {
     path: 'about',
     getComponent(location, cb) {
       System.import('pages/About').then(loadRoute(cb)).catch(errorLoading);
     }
   },
 ]
};



//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// Page1.js
import React from 'react';

const Page1 = (props) => <h1>{props.name}</h1>;

export default Page1;
// Page2.js
import React from 'react';

const Page2 = (props) => <h1>{props.name}</h1>;

export default Page2;
// Home.js
import React from 'react';

const Home = (props) => <h1>{props.name}</h1>;

export default Home;

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

import Home from "./containers/Home";

// vs

const AsyncHome = asyncComponent(() => import("./containers/Home"));

<Route path="/" exact component={AsyncHome} />


import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncLogin = asyncComponent(() => import("./containers/Login"));
const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
;

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// asyncComponent.js
import React from 'react';

export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;

          this.setState({ Component });
        });
      }
    }

    render() {
      if (this.state.Component) {
        return (
          <this.state.Component { ...this.props } { ...collection } />
        )
      }

      return null;
    }
  }
);

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------



// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';

const Page1 = asyncComponent(() => import('./components/Page1')
  .then(module => module.default), { name: 'Page 1' });
const Page2 = asyncComponent(() => import('./components/Page2')
  .then(module => module.default), { name: 'Page 2' });
const Home = asyncComponent(() => import('./components/Home')
  .then(module => module.default), { name: 'Home' });

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </div>
  </Router>
);

export default App;
