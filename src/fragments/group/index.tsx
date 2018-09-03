import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    type?: 'grid' | 'list';
    children?: JSX.Element[];
    className?: string;
}

const cx = classes.bind(css)

export const Group = ({ type = 'grid', children = [], className = '' }: P) => {
    let items: any = null

    const count = children.length || 0
    const division = count % 4

    if (children && children.length) {
        items = React.Children.map(children, (card: any) => {
            return React.cloneElement(card, {
                className: cx(css.item),
            })
        })
    }

    return (
        <div className={cx(css.layout, {
            exact: division !== 0,
            grid: type === 'grid',
            list: type === 'list',
        }, className)}>{items}</div>
    )
}
