import styles from './styles.scss';
import React, { Component } from 'react';

export default class Navbar extends Component {
    render () {
        return (
            <ul className={styles.navbar}>
                <li className={styles.navbar__item}><a href="/test1">Test 1</a></li>
                <li className={styles.navbar__item}><a href="/test2">Test 2</a></li>
                <li className={styles.navbar__item}><a href="/test3">Test 3</a></li>
            </ul>
        );
    }
}
