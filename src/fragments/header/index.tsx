import * as React from 'react'
import * as css from './styles.scss'

import { Locale, Navigation } from 'fragments'

export const Header = () => {
    return (
        <div className={css.header}>
            <h1 className={css.title}>React Starter Kit</h1>

            <Navigation />
            <Locale checked="ru" />
        </div>
    )
}
