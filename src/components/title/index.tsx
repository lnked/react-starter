import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    // size: 'tiny' | 'small' | 'normal' | 'medium' | 'huge';
    // type: 'primary' | 'secondary';
    label?: string;
    center?: boolean;
    children?: string;
    className?: string;
}

const cx = classes.bind(css)

export function Title ({ label = '', children = '', center = false, className = '' }: P) {
    return (
        <div className={cx(css.title, [ center ], className)}>
            {label || children}
        </div>
    )
}
