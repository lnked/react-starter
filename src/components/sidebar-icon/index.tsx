import * as React from 'react'
import * as css from './styles.scss'
import { Icon } from 'components'

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

    renderTitle = () => {
        const { title } = this.props

        return (
            <span className={css.title}>{title}</span>
        )
    }

    renderCircle = () => {
        const { title } = this.props

        return (
            <span className={css.circle} title={title}>
                <svg height="36" width="36" role="presentation">
                    <circle cx="18" cy="18" r="16" />
                </svg>
            </span>
        )
    }

    renderIcon = () => {
        const { icon } = this.props

        return (
            <span className={css.image}>
                <Icon symbol={icon} className={css.pictogram} hidden={true} />
            </span>
        )
    }

    render () {
        const cn: any = []

        const { link, className } = this.props

        cn.push(css.button)

        if (className) {
            cn.push(className)
        } else {
            cn.push(css.relative)
        }

        return (
            <NavLink to={link} className={cn.join(' ')} activeClassName={css.active}>
                { this.renderTitle() }
                { this.renderCircle() }
                { this.renderIcon() }
            </NavLink>
        )
    }
}
