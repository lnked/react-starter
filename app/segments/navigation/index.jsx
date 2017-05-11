import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from './styles.scss'

export default class Navigation extends Component {
    render () {
        return (
            <nav className={css.navigation}>
                <Link
                    to="/site"
                    className={css.link}>Сайт</Link>

                <Link
                    to="/marketing"
                    className={css.link}>Маркетинг</Link>

                <Link
                    to="/seo"
                    className={css.link}>Поисковая оптимизация</Link>

                <Link
                    to="/users"
                    className={css.link}>Пользователи</Link>

                <Link
                    to="/shop"
                    className={css.link}>Магазин</Link>

                <Link
                    to="/system"
                    className={css.link}>Система</Link>
            </nav>
        )
    }
}
