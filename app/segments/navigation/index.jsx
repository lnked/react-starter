import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from './styles.scss'

export default class Navigation extends Component {
    render () {
        return (
            <nav className={css.navigation}>
                <Link
                    to="/cp/site"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Сайт</Link>

                <Link
                    to="/cp/marketing"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Маркетинг</Link>

                <Link
                    to="/cp/seo"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Поисковая оптимизация</Link>

                <Link
                    to="/cp/users"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Пользователи</Link>

                <Link
                    to="/cp/shop"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Магазин</Link>

                <Link
                    to="/cp/system"
                    className={css.navigation__link}
                    activeClassName={css.navigation__link_active}>Система</Link>
            </nav>
        )
    }
}
