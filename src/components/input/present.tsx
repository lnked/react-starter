import * as React from 'react'
import * as css from './styles.scss'

import { P } from './props'

import { classes } from 'helpers'

const cx = classes.bind(css)

export const Present = ({ referrer, value, label, handleChange }: P) => (
    <label className={cx({ wrapper: true })}>
        {label &&
            <div className={cx(css.label)}>{label}</div>
        }

        <input
            ref={referrer}
            value={value}
            onChange={handleChange}
            className={cx(css.control, css.controlInput)}
        />
    </label>
)
