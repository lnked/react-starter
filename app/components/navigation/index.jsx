import React, { Component } from 'react'

import {
    Link,
    NavLink
} from 'react-router-dom'

import css from './styles.scss'

export default class Navigation extends Component {
    state = {
        isOpened: false
    }

    handleOpenMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    navbarItem = (item) => {
        return (
            <li className={css.list__item} key={item.id}>
                <Link to={item.url} className={css.list__item__link}>{item.title}</Link>
            </li>
        )
    }

    render () {
        // const { isOpened } = this.state

        return (
            <nav className={css.navigation}>
                {/*
                <div className={[css.menu, css.menu_top].join(' ')}>
                    <Link to="#" className={css.logo}>Logo</Link>
                    <span className={
                            !isOpened
                                ? css.trigger
                                : [css.trigger, css.trigger_open].join(' ')}
                        onClick={this.handleOpenMenu.bind(this)}>
                        <s className={css.trigger__line} />
                        <s className={css.trigger__line} />
                    </span>
                </div>

                <div className={css.screen} />
                */}

                <NavLink
                    to="/site"
                    activeClassName={css.active}
                    className={css.link}>Сайт</NavLink>

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
