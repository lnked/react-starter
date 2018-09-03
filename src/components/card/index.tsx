import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    children?: JSX.Element;
    className?: string;
}

const cx = classes.bind(css)

export const Card = ({ children, className = '' }: P) => {
    return (
        <div className={cx({ card: true }, className)}>
            {children}
        </div>
    )
}
