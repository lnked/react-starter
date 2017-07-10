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
                    <svg height="36" width="36">
                        <circle cx="18" cy="18" r="16" />
                    </svg>

                    {/*
                    <svg class="progress-circle" width="70" height="70">
                        <path style="stroke-dasharray: 204.244; stroke-dashoffset: 204.244;" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
                    </svg>
                    */}
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
