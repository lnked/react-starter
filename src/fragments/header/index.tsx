import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import {
    Title,
} from 'components'

import {
    Locale,
    Navigation,
} from 'fragments'

const cx = classes.bind(css)

export const Header = () => {
    return (
        <div className={cx(css.header)}>
            <Title className={cx(css.title)}>React Starter Kit</Title>

            <Navigation />

            <Locale checked="ru" />
        </div>
    )
}
