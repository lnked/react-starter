# Guide 3: Redux

## Final Guide

This is the final Guide in this series. Our code builds a Single Page Application which resembles this functionality:

![Final Preview](https://raw.githubusercontent.com/bradwestfall/CSS-Tricks-React-Series/master/guide-3-redux/docs/preview.gif)

## Installing and Running

To start, make sure you're in the `guide-3-redux` folder in command-line.

```sh
# Install Node Modules
npm install

# Start the Server
gulp

# If you want to edit the react code, this rebuilds
gulp watch
```

> The server will be available at localhost:3000

If you want to edit the React code, you'll have to re-build the `public/js/bundle.js` file with Webpack. You'll probably want to open a new terminal tab so you can keep your server running. To rebuild with Webpack, type:

```sh
gulp watch
```

# Implementation Details

If you're coming to this guide for the first time and haven't looked at Guide 1 or 2, be sure to look at their README files for implementation details that led to guide 3.

Here are some details for this guide that weren't covered in the tutorial:

## Organization

The `/app` folder now has a folder for `/actions` and `reducers`.

### Action Creators and Action Type Constants

The `/actions` folder now contains action creators and action type constants as per some of the strategies discussed in [this guide](https://github.com/bradwestfall/CSS-Tricks-React-Series/blob/master/guide-3-redux/docs/action-strategies.md).

### Reducers and Immutable State

Immutable state was discussed in the article. To accomplish this, you'll notice the `Object.assign()` usage to create object copies and also the use of [lodash](https://lodash.com/) as a utility to filter through arrays of objects (sometimes called collections).

The [`user-reducer.js` and `widget-reducer.js`](https://github.com/bradwestfall/CSS-Tricks-React-Series/tree/master/guide-3-redux/app/reducers) files each use a lodash filter like this:

```js
const newWidgets = _.filter(state.widgets, widget => widget.id != action.widgetId);
```

The use of [arrow functions might look confusing](http://bradwestfall.com/articles/dont-get-javascript-es6-arrow-functions) at first. Without arrow functions, it would look like this:

```js
const newWidgets = _.filter(state.widgets, function(widget) {
  return widget.id != action.widgetId
});
```

The `_.filter` method of lodash looks in an array of objects and returns a new version of the array based on the rules of the filter. In our case, we're looking to return the full list except for where the `widget.id` matches the one we're trying to remove.


# API Methods

The [api methods](https://github.com/bradwestfall/CSS-Tricks-React-Series/tree/master/guide-3-redux/app/api) used by the components now perform an additional task of dispatching actions:

```js
export function getUsers() {
  return axios.get('http://localhost:3001/users')
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}
```

# User Component

The `user-list-container.js` and `widget-list-container.js` are probably some of the more interesting file changes from guide-2 to guide-3. There's a lot of new things going on:

```diff
import React from 'react';
+ import { connect } from 'react-redux';
- import _ from 'lodash';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
+ import store from '../../store';
+ import { loadSearchLayout } from '../../actions/search-layout-actions';

const UserListContainer = React.createClass({

-  getInitialState: function() {
-    return {
-      users: []
-    }
-  },

  componentDidMount: function() {
-    userApi.getUsers().then(users => {
-      this.setState({users: users})
-    });
+     userApi.getUsers();
+     store.dispatch(loadSearchLayout('users', 'User Results'));
  },

-  deleteUser: function(userId) {
-    userApi.deleteUser(userId).then(() => {
-      const newUsers = _.filter(this.state.users, user => user.id != userId);
-      this.setState({users: newUsers})
-    });
-  },

  render: function() {
    return (
-      <UserList users={this.state.users} deleteUser={this.deleteUser} />
+      <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
    );
  }

});

+ const mapStateToProps = function(store) {
+   return {
+     users: store.userState.users
+   };
+ };

- export default UserListContainer;
+ export default connect(mapStateToProps)(UserListContainer);
```

The overall strategy reflects a paradigm change from each component being in charge of it's own state, to each component "connecting" to Redux and "dispatching" it's state changes. Take note that this component doesn't even alert itself directly when state changes. The new call to `userApi.getUser()` simply doesn't concern itself about when the response comes back. Instead, that method will dispatch the state to Redux and this component will know about the change the same way any other component in the application can find out, by subscribing. However, when using `react-redux` and the `connect()` method, the `mapStateToProps()` is our way of subscribing instead of Redux's `.subscribe()` method.

This code is also dispatching some static information to the `search-layout.js` component:

```js
store.dispatch(loadSearchLayout('users', 'User Results'))
```

This way the search layout can better represent users and widgets.


# Search Layout

In guide-2, the search-layout was only a view. But now it needs to coordinate with state so it has a Container Component. Unlike some of the other Container Components, it's a perfect example of us not needing to make our own Container Component to wrap `react-redux` around:

```js
import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

  if (searchType === 'users') {
    totalResults = store.userState.users.length;
  } else if (searchType === 'widgets') {
    totalResults = store.widgetState.widgets.length;
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
```

This `mapStateToProps()` function is also a great example of how we can convert specific parts of state into the exact props that we need.
