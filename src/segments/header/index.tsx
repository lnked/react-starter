import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

const isActive = (match, location) => {
    if (!match) {
        return false
    }
    return location.pathname === match.path
}

export default class Header extends React.Component<T, {}> {
    render () {
        const { children } = this.props

        return (
            <div className={css.header}>
                <div className={css.navigation}>
                    <h1 className={css.title}>React Starter Kit</h1>
                    <nav className={css.navList}>
                        <NavLink to="/" exact className={css.link} activeClassName={css.active}>
                            Main page
                        </NavLink>

                        <NavLink to="/changelog" isActive={isActive}
                            className={css.link} activeClassName={css.active}>
                            Another page
                        </NavLink>

                        <a href="https://github.com/lnked/react-starter"
                            target="_blank"
                            className={css.codeLink}
                            rel="noopener noreferrer">Source Code</a>
                    </nav>
                </div>
                {children}
            </div>
        )
    }
}
