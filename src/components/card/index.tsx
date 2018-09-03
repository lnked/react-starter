import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    children?: React.ReactChild;
}

const cx = classes.bind(css)

export const Card = ({ children }: P) => {
    return (
        <div className={cx({ card: true })}>
            {children}
        </div>
    )
}
