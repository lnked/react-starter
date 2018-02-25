import * as React from 'react'
import * as css from './styles'

import {
    Link,
    NavLink
} from 'react-router-dom'

export default class Navigation extends React.Component<{}, {}> {
    state = {
        isOpened: false
    }

    handleOpenMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    navbarItem = (item) => (
        <li className={css.list__item} key={item.id}>
            <Link to={item.url} className={css.list__item__link}>{item.title}</Link>
        </li>
    )

    render () {
        return (
            <nav className={css.navigation}>
                <NavLink
                    to="/site"
                    activeClassName={css.active}
                    className={css.link}
                >Сайт
                </NavLink>

                <NavLink
                    to="/shop"
                    activeClassName={css.active}
                    className={css.link}
                >Интернет Магазин
                </NavLink>

                <NavLink
                    to="/system"
                    activeClassName={css.active}
                    className={css.link}
                >Система
                </NavLink>
            </nav>
        )
    }
}