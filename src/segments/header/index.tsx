import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

export default class Header extends React.Component<T, {}> {
    render () {
        const { children } = this.props

        return (
            <div className={css.header}>
                <div className={css.navigation}>
                    <h1 className={css.title}>React Starter Kit</h1>
                    <nav className={css.navList}>
                        <NavLink to="/" className={css.link} activeClassName={css.active}>
                            Main page
                        </NavLink>
                        <NavLink to="/another" className={css.link} activeClassName={css.active}>
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
