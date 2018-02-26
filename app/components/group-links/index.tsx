import * as React from 'react'
import * as css from './styles'

import { NavLink } from 'react-router-dom'

interface Props {
    base: string;
    links: any;
}

export default class GroupLinks extends React.Component<Props, {}> {
    render () {
        const list: any = []
        const { base, links } = this.props

        links.map((link: any) => {
            list.push(
                <NavLink
                    key={link.slug}
                    to={`/${base}/${link.slug}`}
                    className={css.link}
                    activeClassName={css.active}>{link.name}</NavLink>
            )
        })

        return list
    }
}
