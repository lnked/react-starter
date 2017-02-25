import React, { Component } from 'react';
import css from './styles.scss';

export default class UserList  extends Component {
    render () {
        return (
            <figure className={css.figure}>
                <img src="/images/html-reference-logo.png" alt="HTML Reference logo">
                <figcaption>The HTML Reference logo</figcaption>
            </figure>
        );
    }
}
