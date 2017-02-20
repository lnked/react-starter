import React, { Component } from 'react';
import styles from './styles.scss';

export default class UserList  extends Component {
    render () {
        return (
            <figure className={styles.figure}>
                <img src="/images/html-reference-logo.png" alt="HTML Reference logo">
                <figcaption>The HTML Reference logo</figcaption>
            </figure>
        );
    }
}
