import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import { Page1 } from 'containers'

import css from './styles.scss'

export default class Navigation extends Component {
    render () {
        return (
            <Router>
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

                    <Route exact path="/site" component={Page1}/>
                    <Route path="/marketing" component={Page1}/>
                    <Route path="/seo" component={Page1}/>
                    <Route path="/users" component={Page1}/>
                    <Route path="/shop" component={Page1}/>
                    <Route path="/system" component={Page1}/>
                </nav>
            </Router>
        )
    }
}
