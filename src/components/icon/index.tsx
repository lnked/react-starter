import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface PropsIcon {
    hidden?: boolean;
    symbol?: string;
    className?: string;
}

const cx = classes.bind(css)

export const Icon = ({ symbol = '', hidden = false, className = '' }: PropsIcon) => {
    const baseUrl: string = window.location.origin || `${window.location.protocol}://${window.location.host}`

    return (
        <svg
            className={cx({ icon: true }, className)}
            role="presentation"
            key={`icon_${symbol}`}
            aria-hidden={hidden}>
            <use xlinkHref={`${baseUrl}#${symbol}`} />
        </svg>
    )
}
