import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './styles.scss';

export default class Navigation extends Component {
    render () {
        return (
            <nav className={styles.navigation}>
                <IndexLink
                    to="/site"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Сайт</IndexLink>

                <Link
                    to="/marketing"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Маркетинг</Link>

                <Link
                    to="/seo"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Поисковая оптимизация</Link>

                <Link
                    to="/users"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Пользователи</Link>

                <Link
                    to="/shop"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Магазин</Link>

                <Link
                    to="/system"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Система</Link>
            </nav>
        );
    }
}
