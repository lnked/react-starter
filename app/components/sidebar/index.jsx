import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './styles.scss';

export default class Sidebar extends Component {
    render () {
        return (
            <nav className={styles.navigation}>
                <IndexLink
                    to="/cp/site"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active} icon="icon1" />

                <Link
                    to="/cp/marketing"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active} icon="icon2" />
            </nav>
        );
    }
}
