import * as React from 'react'
import * as css from './styles'

import { PropTypes } from 'prop-types'

import { NavLink } from 'react-router-dom'

export default class SidebarIcon extends React.Component<{}, {}> {
    static propTypes = {
        link: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        className: PropTypes.string
    }

    static defaultProps = {
        url: '#',
        className: ''
    }

    render () {
        const cn = []

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
            <NavLink to={`${link}`} className={cn.join(' ')} activeClassName={css.active}>
                <span className={css.title}>{title}</span>
                <span className={css.circle}>
                    <svg height="36" width="36" role="presentation" title={title}>
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
