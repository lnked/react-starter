import * as React from 'react'
import * as css from './styles.scss'
import { classes } from 'helpers'

interface P {
    value: string;
}

const cx = сlasses.bind(css)

export const Present = ({ value }: P) => {
    return (
        <div className={cx({})}>
            <p>value: {value}</p>
        </div>
    )
}
