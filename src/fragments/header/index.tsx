import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import {
    Locale,
    Navigation,
} from 'fragments'

const cx = classes.bind(css)

export function Header () {

    return (
        <div className={cx(css.header)}>
            <div className={cx(css.title)}>React Starter Kit</div>

            <Navigation />

            <Locale checked="ru" />
        </div>
    )

}
