import React from 'react';
import ReactDOM from 'react-dom';
require('es6-promise').polyfill();

// Notice that we've organized all of our routes into a separate file.
import Router from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));
