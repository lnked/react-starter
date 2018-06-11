import * as React from 'react'
import * as css from './styles.scss'

import {
    Link,
    NavLink
} from 'react-router-dom'

// import { isActive } from 'helpers/predicts'

interface S {
    isOpened: boolean;
}

export default class Navigation extends React.Component<{}, S> {
    state = {
        isOpened: false
    }

    handleOpenMenu = () =>
        this.setState({
            isOpened: !this.state.isOpened
        })

    navbarItem = (item) =>
        <li key={item.id}>
            <Link to={item.url} className={css.link}>{item.title}</Link>
        </li>

    render () {
        return (
            <nav className={css.navigation}>
                <NavLink to="/" exact className={css.link} activeClassName={css.active}>
                    Main page
                </NavLink>

                <NavLink to="/changelog" className={css.link} activeClassName={css.active}>
                    Another page
                </NavLink>

                <a href="https://github.com/lnked/react-starter"
                    target="_blank"
                    className={css.codeLink}
                    rel="noopener noreferrer">Source Code</a>
            </nav>
        )
    }
}
