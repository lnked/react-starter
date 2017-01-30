# CSS-Tricks: Leveling Up With React, A Three-Part Series

This repo is for a [CSS-Tricks series on React](https://css-tricks.com/learning-react-router/). The documentation in this repo will show you many things that weren't shown in the series, such as

- Steps for installing and running the code
- An explanation of the Webpack and Babel setup
- Extra Tips and Tricks
- New ES6 Syntax

## Guide Documentation

Each series comes with its own guide in this repo. Each guide will have a README file for its specific documentation:

- [Guide 1: React Router](https://github.com/bradwestfall/CSS-Tricks-React-Series/tree/master/guide-1-react-router)
- [Guide 2: Container Components](https://github.com/bradwestfall/CSS-Tricks-React-Series/tree/master/guide-2-container-components)
- [Guide 3: Redux](https://css-tricks.com/learning-react-redux/)


## Installing and Running Code

Each of the three guides needs to be npm-installed and ran separately. Start by cloning this repo and installing the first guide for React Router:

```sh
cd path/to/guide-1-react-router
npm install
gulp
```

> The server will be available at localhost:3000

To run the code from the other guides, `cd` to their folders and run the `npm` steps again from their folder.

If you want to edit the React code, you'll have to re-build the `public/js/bundle.js` file with Webpack. You'll probably want to open a new terminal tab so you can keep your server running. To rebuild with Webpack, type:

```sh
gulp watch
```

Also note that you'll need to [globally install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) first if you haven't already


# Implementation Details

The articles at CSS-Tricks will be focused on their respective topics. They don't cover 100% of the concepts and implementation details of the code in the GitHub Guides. However, each guide will come with its own _README.md_ file that tries to cover some of the implementation details, especially for ES6 concepts.

It should also be noted that the guides leave out many formalities like validation, security (XSS, CSRF) and organizational details to stay focused on the topics. These guides are trying to convey the "bigger picture" of how React _can_ work in a Single Page Application. They do not necessarily serve as a "best-practices" starting point.


### Server

Each guide uses a very simple Express server which should take no configuration on your part to setup. The `gulp` step will launch the server so you can visit _localhost:3000_ in the browser to see the guide. Type `CTRL+C` to stop the server, and remember that only one guide can be ran at any given time since you'll `cd` to each guide and run its server separately.


## Webpack

Webpack is a bundler that allows you to author multiple JavaScript files and have them bundled into one file for sending to the browser. If you're new to Webpack, here's a quick overview...

Your project (or in this case, each guide at this repo) will have a `webpack.config.js` file. This file tells Webpack about which JavaScript file is your main entry point. That entry file will "include" other JavaScript files that it needs, which are it's "dependencies". In turn, those files can "include" even more dependencies. Webpack takes all the files in this process and bundles them into one output file. You can define where Wepback saves that file also in `webpack.config.js`. These guides will bundle their code to `/public/js/bundle.js`.

The `bundle.js` file that Webpack creates will be the only JavaScript file sent to the browser. So the browser will start with all the JavaScript it needs for the application without making additional requests back to the server.

Webpack allows multiple ways to indicate dependencies in JavaScript files. One way you'll see commonly online uses `require()` statements. That's a pattern called CommonJS. But more recently, JavaScript is in the process of adopting a new syntax called "ES6 modules" which use `include` statements. The browser doesn't understand either of these approaches, so Webpack will convert code written with CommonJS or ES6 modules into ES5 which the browser does understand. But Webpack will need a third party tool called Babel to use ES6 modules -- which is what these guides use for the app.

If this all sounds chaotic and difficult to setup, don't worry, all the work is already done. All you need to do is run the `npm install` and then the `gulp` and/or `gulp watch` commands from the install instructions.

Note that simply running `gulp` will launch the Node server whereas `gulp watch` takes care of the React/Webpack part. So you'll want to run these commands in two separate tabs if you want to have the server running and to be making React code changes.


## Babel

Babel will tell Webpack how to convert ES6 (and even ES7) code to ES5. You might ask why we would want to write in future versions of JavaScript that aren't even fully supported? Well, there's new JavaScript syntax which is really nice to use. Plus, ES6 was finalized in 2015, which is why it's also called ES2015. So why should we have to wait for all browsers to catch up to a standard that's from 2015?

Many React guides use ES6, so getting familiar with it will also help you learn React. Also note that the a common way to use Babel is to put it's list of desired "presets" in a `.babelrc` file. This is the strategy that we're using and this file is already created for you.


# Extra Tips and Tricks

## JSX with Sublime

If you use Sublime Text Editor, you may notice the JSX syntax highlighting is weird in `.js` files. That's because the JavaScript syntax highlighter isn't familiar with markup. You'll probably want to install the [babel-sublime](https://github.com/babel/babel-sublime) plugin which encourages you to use the _JavaScript (Babel)_ syntax for your files over the _JavaScript_ syntax.

You might also notice that Emmet shortcuts don't work in JSX. Wes Bos wrote a [great guide](http://wesbos.com/emmet-react-jsx-sublime/) for setting that up.


## The multiple ways of creating components

For myself, I prefer the `React.createClass` way over the `extends React.Component` way. Pete Hunt (former Facebook React team developer) [once wrote](https://github.com/petehunt/react-howto#learning-es6):

> "You may see some talk about ES6 classes being the preferred way to create React components. This is untrue. Most people (including Facebook) are using React.createClass()."

I'm not saying there's anything wrong with the ES6 way, I'm just saying you don't have to feel bad or behind if you do it the older `React.createClass` way.


## More to come...

If you want to make more suggestions for this section that help beginners break through the hurdles, start a GitHub issue and perhaps we can add more tips here.
