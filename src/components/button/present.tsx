import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { P } from './props'

const cx = classes.bind(css)

export const Present = ({ type, size, circle, label, loading, children, handleClick, ...rest }: P) => {
    const {
        info,
        danger,
        normal,
        success,
        primary,
        warning,
    } = rest

    return (
        <button
            type={type}
            onClick={handleClick}
            className={cx(css.button, {
                info,
                normal,
                danger,
                success,
                primary,
                warning,
                circle,
                loading,
            },
            [ `size-${size}` ])}>
            {label || children}
        </button>
    )
}
