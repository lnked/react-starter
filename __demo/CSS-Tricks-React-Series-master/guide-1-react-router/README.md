# Guide 1: React Router

## Installing and Running

To start, make sure you're in the `guide-1-react-router` folder in command-line.

```sh
# Install Node Modules
npm install

# Start the Server
gulp

# If you want to edit the react code, this rebuilds
gulp watch
```

> The server will be available at localhost:3000

If you want to edit the React code, you'll have to re-build the `public/js/bundle.js` file with Webpack. You'll probably want to open a new terminal tab so you can keep your server running. To rebuild with webpack, type:

```sh
gulp watch
```


# Implementation Details

Here are some details for this guide that weren't covered in the tutorial:


## Keeping it simple

For simplicity, components in this guide are missing some formalities like [prop types](https://facebook.github.io/react/docs/reusable-components.html). I've tried to keep the components as simple as possible to get them working with the router. Since it's the minimal code to get the router working, the guide is missing many React best practices.


## ES6 Modules

In the [CodePen](http://codepen.io/bradwestfall/pen/reaWYL) demo from the CSS-Tricks tutorial, we brought React and React Router into our application via CDNs. When a JavaScript tool is brought in through CDN, the tool globally available in the code, which is why the objects `React` and `ReactRouter` were available to us in the file. With bundlers like Webpack though, we are trying to avoid placing things in the global namespace. Each JavaScript module that we want to use (third-part or our own) will have to use `include` statements to get access to it. This is why you'll see this at the top of most the files in the `/app` folder:

```js
include React from 'react'
```

Importing works similarly to CommonJS' `require()` statement which automatically looks for our module (`react`) inside of the `node_modules` folder.

In the `app.js` file (the entry file for our application), you'll see this code:

```
import Router from './router';
```

Since it's a relative path, the `import` won't look inside `node_modules`, but rather wherever our relative path points. The import statement is going to take whatever the `/router.js` file wants to export, and it will place that content (usually an object) in our `Router` variable. Then we can take the `Router` variable and mount it to the DOM `'root'`:

```js
ReactDOM.render(Router, document.getElementById('root'));
```

This may seen different from the CSS-Tricks article, but it's actually the same. If you look at what the `/router.js` file is exporting, you'll see that it's a `<Router>`. Just think of this as a way to organize our code so not everything is in the `app.js` file.


## ES6 Destructuring

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) allows us to extract the intermal parts of an object into normal variables. So you may see lines of code like this:

```js
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
```

This is a combination of destructuring and imports. It's saying we want to import `react-router`, but instead of getting the `ReactRouter` object back, we want to extract certain properties from that object and create normal variables like `Router`, `Route` etc...

## Components

Here is a sample of the `WidgetList` component. Notice it must `import` React to work. Also notice that it's creating a constant called `WidgetList` instead of using `var`. As you read more about these new ES6 ways of creating "variables", you'll see that we should only use `var` if we truly need something to _be_ variable -- in other words, something that will change over time. In our case, the reference to `WidgetList` (for this file) will _always_ be the same thing and is not something that incurs variable change. Therefore it is a constant.

```js
import React from 'react';

const WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
    );
  }
});

export default WidgetList;
```

## Exports

One of the more confusing parts about ES6 modules (to those familiar with `require()`) is the word `default`. With ES6 modules, each module can actually export more than one thing. Using `default` means that this `export` is the primary export of this file. It's more than just a formality though, using the `default` syntax also makes importing easier. With the `WidgetList` example from above, we are exporting `WidgetList` by default. This means that when we `import` WidgetList, we will get the exact same thing that was exported:

```js
import WidgetList from './components/widget-list'
```

Had we not specified the `default` and wrote the code as `export WidgetList`, then the export would be an object with `WidgetList` inside of it. That means the `import` statement that receives it would have to look like this:

```js
import SomeObject from './components/widget-list'
const WidgetList = SomeObject.WidgetList
```

> I'm using "SomeObject" as a name just to show that it's obnoxious to receive the thing we want (`WidgetList`) wrapped in something else.

Or, we could use destructuring syntax like this to unwrap the `WidgetList` into it's own variable:

```js
import { WidgetList } from './components/widget-list'
```

With all these options, it's just easier to use the `default` way.

If you look at all the components in Guide 1, you'll see that they all follow the same pattern of declaring a constant first, then exporting that constant as a `default`. However, it should also be understood that we can export the component as a `default` directly without creating a constant which does the exact same thing:

```js
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
    );
  }
});
```

This just saves us some keystrokes, but as stated before, the examples use the other way with the constant because it might be easier for beginners to ES6 modules to grasp.
