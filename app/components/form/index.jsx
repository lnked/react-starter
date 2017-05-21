// import css from './styles.scss';
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// function Form ({ onSubmit, expanded = false, children }) {
//     return (
//         <form style={ expanded ? { height: 'auto' } : { height: 0 } } onSubmit={onSubmit}>
//             {children}
//             <button>Expand</button>
//         </form>
//     )
// }

// Form.propTypes = {
//     children: PropTypes.object.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     expanded: PropTypes.bool
// }

// export default Form

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class MyForm extends FormWithConstraints {
  constructor(props) {
    super(props);

    this.state = {
      username: 'john@doe.com',
      password: '',
      passwordConfirm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.currentTarget;
    this.setState({
      [target.name]: target.value
    });
    super.handleChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    super.handleSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div>
          <label>Username</label>
          <input type="email" name="username"
                 value={this.state.username} onChange={this.handleChange}
                 required />
          <FieldFeedbacks for="username">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password"
                 value={this.state.password} onChange={this.handleChange}
                 pattern=".{5,}" required />
          <FieldFeedbacks for="password" show="all">
            <FieldFeedback when="valueMissing" />
            <FieldFeedback when="patternMismatch">Should be at least 5 characters long</FieldFeedback>
            <FieldFeedback when={value => !/\d/.test(value)} warning>Should contain some numbers</FieldFeedback>
            <FieldFeedback when={value => !/[a-z]/.test(value)} warning>Should contain some small letters</FieldFeedback>
            <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>Should contain some capital letters</FieldFeedback>
            <FieldFeedback when={value => !/\W/.test(value)} warning>Should contain some special characters</FieldFeedback>
          </FieldFeedbacks>
        </div>

        <FieldFeedbacks for="password">
          <FieldFeedback when="valueMissing" />
          <FieldFeedback when="patternMismatch">Should be at least 5 characters long</FieldFeedback>
        </FieldFeedbacks>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="passwordConfirm"
                 value={this.state.passwordConfirm} onChange={this.handleChange}
                 required />
          <FieldFeedbacks for="passwordConfirm">
            <FieldFeedback when="*" />
            <FieldFeedback when={value => value !== this.state.password}>Not the same password</FieldFeedback>
          </FieldFeedbacks>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}