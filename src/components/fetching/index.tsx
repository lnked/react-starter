import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { Spinner } from 'components'

export interface P {
    pending?: boolean;
    children?: React.ReactChild;
}

const cx = classes.bind(css)

export const Fetching = ({ pending = true, children }: P) => {
    return (
        <div className={cx(css.fetch)}>
            {pending
                ? <Spinner />
                : children
            }
        </div>
    )
}
