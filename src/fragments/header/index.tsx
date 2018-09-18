import * as React from 'react'
import * as css from './styles.scss'

import {
    Title,
} from 'components'

import {
    Locale,
    Navigation,
} from 'fragments'

export const Header = () => {
    return (
        <div className={css.header}>
            <Title className={css.title}>React Starter Kit</Title>

            <Navigation />

            <Locale checked="ru" />
        </div>
    )
}
