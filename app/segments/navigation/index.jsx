import React, { Component } from 'react'

import {
  Link,
  NavLink
} from 'react-router-dom'

import css from './styles.scss'

export default class Navigation extends Component {
    render () {
        return (
            <nav className={css.navigation}>
                <Link
                    to="/site"
                    activeClassName={css.active}
                    className={css.link}>Сайт</Link>

                <NavLink
                    to="/marketing"
                    activeClassName={css.active}
                    className={css.link}>Маркетинг</NavLink>

                <NavLink
                    to="/seo"
                    activeClassName={css.active}
                    className={css.link}>Поисковая оптимизация</NavLink>

                <NavLink
                    to="/users"
                    activeClassName={css.active}
                    className={css.link}>Пользователи</NavLink>

                <NavLink
                    to="/shop"
                    activeClassName={css.active}
                    className={css.link}>Магазин</NavLink>

                <NavLink
                    to="/system"
                    activeClassName={css.active}
                    className={css.link}>Система</NavLink>
            </nav>
        )
    }
}
