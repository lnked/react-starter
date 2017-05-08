import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from './styles.scss'

export default class Navigation extends Component {
    render () {
        return (
            <nav className={css.navigation}>
                <Link
                    to="/cp/site"
                    className={css.link}>Сайт</Link>

                <Link
                    to="/cp/marketing"
                    className={css.link}>Маркетинг</Link>

                <Link
                    to="/cp/seo"
                    className={css.link}>Поисковая оптимизация</Link>

                <Link
                    to="/cp/users"
                    className={css.link}>Пользователи</Link>

                <Link
                    to="/cp/shop"
                    className={css.link}>Магазин</Link>

                <Link
                    to="/cp/system"
                    className={css.link}>Система</Link>
            </nav>
        )
    }
}
