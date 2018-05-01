import * as React from 'react'
import * as css from './styles.scss'

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
                    <nav>
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
