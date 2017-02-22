import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './styles.scss';

export default class Navigation extends Component {
    render () {
        return (
            <nav className={styles.navigation}>
                <IndexLink
                    to="/cp/site"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Сайт</IndexLink>

                <Link
                    to="/cp/marketing"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Маркетинг</Link>

                <Link
                    to="/cp/seo"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Поисковая оптимизация</Link>

                <Link
                    to="/cp/users"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Пользователи</Link>

                <Link
                    to="/cp/shop"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Магазин</Link>

                <Link
                    to="/cp/system"
                    className={styles.navigation__link}
                    activeClassName={styles.navigation__link_active}>Система</Link>
            </nav>
        );
    }
}
