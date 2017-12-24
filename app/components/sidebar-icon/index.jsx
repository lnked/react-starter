import React, { Component } from 'react'
import { string } from 'prop-types'
import css from './styles.scss'

import { NavLink } from 'react-router-dom'

export default class SidebarIcon extends Component {
    static propTypes = {
        link: string,
        icon: string,
        title: string,
        // component: string,
        className: string
    }

    static defaultProps = {
        url: '#',
        className: ''
    }

    render () {
        const {
            link,
            title,
            icon
        } = this.props

        return (
            <NavLink to={`${link}`} className={`${css.button} ${this.props.className}`} activeClassName={css.active}>
                <span className={css.title}>{title}</span>
                <span className={css.circle}>
                    <svg height="36" width="36" role="img" alt={title}>
                        <circle cx="18" cy="18" r="16" />
                    </svg>
                </span>

                <span className={css.image}>
                    <svg className={css.pictogram} role="presentation" aria-hidden="true" aria-labelledby="title">
                        <use xlinkHref={`#${icon}`}/>
                    </svg>
                </span>
            </NavLink>
        )
    }
}
