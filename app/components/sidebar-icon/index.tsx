import * as React from 'react'
import * as css from './styles'

import { NavLink } from 'react-router-dom'

interface T {
    link: string;
    icon?: string;
    title: string;
    className: string;
}

export default class SidebarIcon extends React.Component<T, {}> {
    static defaultProps = {
        link: '#',
        className: ''
    }

    render () {
        const cn: any = []

        const {
            link,
            title,
            icon,
            className
        } = this.props

        cn.push(css.button)

        if (className) {
            cn.push(className)
        }

        return (
            <NavLink to={link} className={cn.join(' ')} activeClassName={css.active}>
                <span className={css.title}>{title}</span>
                <span className={css.circle} title={title}>
                    <svg height="36" width="36" role="presentation">
                        <circle cx="18" cy="18" r="16" />
                    </svg>
                </span>

                <span className={css.image}>
                    <svg className={css.pictogram} role="presentation" aria-hidden="true" aria-labelledby="title">
                        <use xlinkHref={`#${icon}`} />
                    </svg>
                </span>
            </NavLink>
        )
    }
}
