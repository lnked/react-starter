import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface PropsIcon {
    hidden?: boolean;
    symbol?: string;
    className?: string;
}

const cx = classes.bind(css)

export function Icon ({ symbol = '', hidden = false, className = '' }: PropsIcon) {
    return (
        <svg
            className={cx({ icon: true }, className)}
            role="presentation"
            key={`icon_${symbol}`}
            aria-hidden={hidden}>
            <use xlinkHref={`#${symbol}`} />
        </svg>
    )
}
