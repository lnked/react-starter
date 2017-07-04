import React, { Component } from 'react'
import { string } from 'prop-types'
import css from './styles.scss'

import { NavLink } from 'react-router-dom'

export default class SidebarIcon extends Component {
    static propTypes = {
        link: string,
        title: string,
        system: string,
        className: string
    }

    static defaultProps = {
        url: '#',
        className: ''
    }

    render () {
        const { link, title, system } = this.props

        return (
            <NavLink to={`${link}`} className={`${css.button} ${this.props.className}`} activeClassName={css.active}>
                <span className={css.title}>{title}</span>
                <span className={css.circle}>
                    <svg height="48" width="48">
                        <circle cx="24" cy="24" r="20" />
                    </svg>
                </span>
                <span className={css.image}>
                    <svg className={css.pictogram} role="image">
                        <use xlinkHref={`#${system}`}/>
                    </svg>
                </span>
            </NavLink>
        )
    }
}
