import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    href: string;
    children: JSX.Element[] | JSX.Element | any;
    className: string;
}

const cx = classes.bind(css)

export function Link ({ href, children = '', className = '', ...props }: P) {

    return (
        <a href={href} className={cx(css.link, className)} {...props}>
            {children}
        </a>
    )

}
