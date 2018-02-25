import * as React from 'react'
import * as css from './styles'

import { Logo, SidebarIcon } from 'components'

const base = ''

export default class Sidebar extends React.Component<{}, {}> {
    renderPages () {
        const pages = [
            {
                id: 1,
                icon: 'dashboard',
                title: 'Рабочий стол',
                system: 'dashboard',
                component: 'dashboard'
            },
            {
                id: 2,
                icon: 'structure',
                title: 'Страницы',
                system: 'structure',
                component: 'structure'
            }
        ]

        return pages.map((props, id) => <SidebarIcon key={id} {...props} link={`${base}/${props.system}`} />)
    }

    render () {
        return (
            <nav className={css.sidebar}>
                <Logo link={base} />

                { this.renderPages() }

                <SidebarIcon
                    key="site.settings"
                    icon="settings"
                    title="Настройки сайта"
                    system="settings"
                    component="settings"
                    link={`${base}/settings`}
                    className={css.settings}
                />
            </nav>
        )
    }
}
