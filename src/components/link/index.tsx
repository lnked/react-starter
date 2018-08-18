import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    href: string
    className: string
    children?: React.ReactChild
}

const cx = classes.bind(css)

export const Link = ({ href, children, className = '', ...props }: P) => (
    <a href={href} {...props} className={cx(css.link, className)}>
        {children}
    </a>
)
