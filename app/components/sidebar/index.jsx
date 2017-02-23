import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './styles.scss';

export default class Sidebar extends Component {
    render () {
        return (
            <nav className={styles.sidebar}>
                <IndexLink
                    to="/cp/site"
                    className={[styles.sidebar__section, styles.sidebar__logo].join(' ')}
                    activeClassName={styles.sidebar__logo_active}
                />

                <Link
                    icon="icon2"
                    to="/cp/seo"
                    className={styles.sidebar__section}
                    activeClassName={styles.sidebar__section_active}
                />

                <Link
                    icon="icon2"
                    to="/cp/system"
                    className={styles.sidebar__section}
                    activeClassName={styles.sidebar__section_active}
                />

                <Link
                    icon="icon2"
                    to="/cp/shop"
                    className={styles.sidebar__section}
                    activeClassName={styles.sidebar__section_active}
                />

                <Link
                    icon="icon2"
                    to="/cp/users"
                    className={styles.sidebar__section}
                    activeClassName={styles.sidebar__section_active}
                />
            </nav>
        );
    }
}
