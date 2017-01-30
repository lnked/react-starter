# Guide 2: Container Components

## Installing and Running

To start, make sure you're in the `guide-2-container-components` folder in command-line.

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

# Learning the code

If you jump into the code, I would advise looking at `Widgets` before `Users`. There's much less code to look at for `Widgets`. The `Users` code is similar to `Widgets`, but there's more with profiles.


# Implementation Details

Here are some details for this guide that weren't covered in the tutorial:


## JSON Server

For Guide 2 and 3, we will use __JSON Server__ to give us the feel of having a real database. It will need to run on a different port from our Node server though, so it runs on _localhost:3001_.

Launching the Node server with `gulp` now also launches JSON Server.

They have [great documentation](https://github.com/typicode/json-server) if you want to learn more about how it works, but in short, they create a RESTful API for us to `GET`, `POST`, `PUT`, and `DELETE` to. In this guide, we can use those HTTP verbs on the `/users` path as follows:

A `GET` request to _localhost:3001/users_ will return a JSON array which resembles:

```
[
    {
      "id": 3,
      "name": "Dan Abramov",
      "github": "gaearon",
      "twitter": "dan_abramov",
      "worksOn": "Redux"
    },

    ...

]
```

A `DELETE` request to _localhost:3001/users/3_ will delete the record where `id:3`.

Since I knew that you might mess with the data (like a few deletes), I made it so each time you restart the server with the `gulp` command, the original database data will be restored - so delete away!


## Organization

The `/app/components` folder is now organized by:

- containers
- layouts
- views

This was just the simplest way to organize this small codebase. I make no claims that this is amazing organization :)


## Search Layout

The main purpose of the Search Layout component was to convey nested layouts in the first tutorial. It doesn't yet serve us any in the Container Components tutorial to utilize it. Therefore, it just has some static information which is not yet hooked up to state. In the third guide, we will make this information more meaningful.


## Axios

As discussed in the tutorial, we use [axios](https://github.com/mzabriskie/axios) for our Ajax (XHR) requests. However, the components don't make XHR requests directly from their `componentDidMount()` methods as the tutorial showed. Instead, all database API requests exist in the `/app/api` folder. The `componentDidMount()` methods will use those outside files for XHR requests. This just helps keep the component size down and helps them to look cleaner.


## ES6 Arrow Functions

ES6 arrow functions are very popular in React tutorials online. While the CSS-Tricks tutorial doesn't use ES6 features, the code at this guide will. Here's a brief explanation of how they work:

```js
// Old way with ES5
componentDidMount: function() {
  userApi.getList().then(function(users) {
    this.setState({users: users});
  });
},

// New way with ES6 Arrow Functions
componentDidMount: function() {
  userApi.getList().then(users => {
    this.setState({users: users});
  });
}
```

Here's another example with Axios promises:

```js
// Old way with ES5
export function getList() {
  return axios.get('http://localhost:3001/users')
    .then(function(response) {
      return response.data;
    });
}


// New way with ES6 Arrow Functions
export function getList() {
  return axios.get('http://localhost:3001/users')
    .then(response => response.data);
}
```

Are arrow functions just syntax sugar for less typing? No, they actually have different rules for scope which can sometimes be beneficial for callback functions. For this guide, we'll only use them for callback functions so you can get used to them in small doses.

If you're interested in learning more, [I wrote a blog post](http://bradwestfall.com/articles/dont-get-javascript-es6-arrow-functions).


## ES6 Spread Operator

ES6 now has a [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). React borrowed the idea for passing attributes into components. To understand this new feature, consider the following scenarios...

Imagine we wanted to pass an object from parent component to child component:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent user={user} />);
}
```

This works but the child component must access the name by doing `this.props.user.name`. It might be nicer to just be able to type `this.props.name`. But in order to have that option, we would have to itemize and list each property when we pass them into the child component:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent name={user.name} occupation={user.occupation} state={user.state} />);
}
```

Now, the child component can do `this.props.name`. This is nicer for the child component, but it's obnoxious to have to list out each property.

### Spread Attributes to the rescue!

With React's [Spread Attributes](https://facebook.github.io/react/docs/jsx-spread.html#spread-attributes), we can do this:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent {...user} />);
}
```

This is a nice way to write code for the parent and the child gets to access the props like this: `this.props.name`, `this.props.occupation` and `this.props.state`.

In the guide, you can see this behavior on the [`user-profile-container.js`](https://github.com/bradwestfall/CSS-Tricks-React-Series/blob/master/guide-2-container-components/app/components/containers/user-profile-container.js#L32) file.

## Delete Strategy

In the CSS-Tricks tutorial, we showed how [events can be passed from Container Components down to Presentational Components](https://css-tricks.com/learning-react-container-components/#article-header-id-6). Thinks are slightly more complex in this guide though. We have a new problem to solve that wasn't covered well in the tutorial.

The problem is that sometimes functions like `deleteUser()` need to be called with an argument. In this case it's the `userId`. The `onClick` can't _call_ the `deleteUser()` method with the argument right away. That would lead to the `deleteUser()` method getting called as soon as the page loads for all the users. Instead, it needs to ensure that _when_ the `onClick` happens, to call the function with an argument. For that we'll use `.bind()`.

#### .bind()

This is how we'll indicate that when the `onClick` event happens, to call `deleteUser()` and pass the correct `user.id` as the first argument:

```js
{props.users.map(user => {
  return (
    <button onClick={props.deleteUser.bind(null, user.id)}>Delete</button>
  );
})}
```

#### Updating the user list after removal

In the XHR callbacks to delete `Users` and `Widgets`, the code makes a copy of the state, then updates and replaces the state with the copy. We do this so our state is "immutable". This is a topic that's covered in the third CSS-Tricks article on Redux.

```js
deleteUser: function(userId) {
  userApi.deleteUser(userId).then(() => {
    const newUsers = _.filter(this.state.users, user => user.id != userId);
    this.setState({users: newUsers})
  });
}
```

Note that [lodash](https://lodash.com/) is being used to filter the current state by making a copy of it with all users that don't match the ID. The copy without the matched user will replace the state.
