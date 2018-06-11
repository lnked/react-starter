import * as React from 'react'
import * as css from './styles.scss'

import { Navigation } from 'segments'

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

                    <Navigation />

                </div>
                {children}
            </div>
        )
    }
}
