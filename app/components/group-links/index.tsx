import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

interface T {
    base: string;
    links: any;
}

export default class GroupLinks extends React.Component<T, {}> {
    render () {
        const list: any = []
        const { base, links } = this.props

        links.map((link: any) => {
            list.push(
                <NavLink
                    key={link.slug}
                    to={`/${base}/${link.slug}`}
                    className={css.link}
                    activeClassName={css.active}
                >
                    <span className={css.inline}>
                        {link.name}
                    </span>
                </NavLink>
            )
        })

        return list
    }
}
