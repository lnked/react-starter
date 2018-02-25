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
            },
            {
                id: 3,
                icon: 'entities',
                title: 'Сущности',
                system: 'entities',
                component: 'entities'
            },
            {
                id: 4,
                icon: 'users',
                title: 'Пользователи',
                system: 'users',
                component: 'users'
            },
            {
                id: 5,
                icon: 'globals',
                title: 'Глобальные параметры',
                system: 'globals',
                component: 'globals'
            },
            {
                id: 6,
                icon: 'updates',
                title: 'Обновления',
                system: 'updates',
                component: 'updates'
            },
            {
                id: 7,
                icon: 'locale',
                title: 'Языковой стандарт',
                system: 'locale',
                component: 'locale'
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
