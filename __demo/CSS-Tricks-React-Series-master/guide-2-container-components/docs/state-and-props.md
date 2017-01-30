# Beginner guide to State and Props

In the tutorial, we made reference to this code:

```js
var UserList = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    $.get('/path/to/user-api').then(function(response) {
      _this.setState({users: response})
    });
  },

  render: function() {
    return (
      <ul className="user-list">
        {this.state.users.map(function(user) {
          return (
            <li key={user.id}>
              <Link to="/users/{user.id}">{user.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
});
```

This guide will talk you through each piece so you can better understand it.

## State

State is just a term for where we can store data that is going to change over time. The `getInitialState()` method just needs to return an Object Literal that contains our initial state. In our case, it's an empty users array. It's important to know that this method is only invoked once when the component is used.

Technically, the `componentDidMount()` method happens next. But it just fires off an Ajax request which is asynchronous so `componentDidMount()` method doesn't do much to change the state when it's called initially.

Then the `render` method is called and it loops over the `state.users` array which is still empty. No list items are created at this time.

Then a moment later, the Ajax call returns which `componentDidMount()` started. That will call a callback function which will set the state of the users array to be filled with the response of the Ajax call.

The cool part is, whenever state changes in a component, the component will automatically re-render. So even though React called `render` once already when the users array was empty, now it's called again, only this time the `users` array has data.

For more information on these types of "Lifecycle" concepts, see the [React Documentation](https://facebook.github.io/react/docs/component-specs.html)
