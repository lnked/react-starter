import * as React from 'react'
import * as css from './styles.scss'

import { Navigation } from 'segments'

export class Header extends React.Component<{}, {}> {
    render () {
        return (
            <div className={css.header}>
                <h1 className={css.title}>React Starter Kit</h1>
                <Navigation />
            </div>
        )
    }
}
