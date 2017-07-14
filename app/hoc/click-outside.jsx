// ES6 Class Syntax 
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
 
class MyComponent extends Component {
  handleClickOutside = evt => {
    // ..handling code goes here... 
  }
}
 
export default onClickOutside(MyComponent)

// // load the HOC: 
// var onClickOutside = require('react-onclickoutside');
// var createReactClass = require('create-react-class');
 
// // create a new component, wrapped by this onclickoutside HOC: 
// var MyComponent = onClickOutside(createReactClass({
//   ...,
//   myClickOutsideHandler: function(evt) {
//     // ...handling code goes here... 
//   },
//   ...
// }), {
//   handleClickOutside: function(instance) {
//     return instance.myClickOutsideHandler;
//   }
// });
 