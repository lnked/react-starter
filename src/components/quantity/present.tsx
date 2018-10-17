import * as React from 'react'
import * as css from './styles.scss'
import { classes } from 'helpers'

export interface P {
    value: string;
}

const cx = classes.bind(css)

export function Present ({ value }: P) {
    return (
        <div className={cx(css.quantity)}>
            <p>value: {value}</p>
        </div>
    )
}
