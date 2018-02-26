import * as React from 'react'
import * as css from './styles'

import { NavLink } from 'react-router-dom'

import { Layout, Aside, Content } from 'segments'

const base: string = 'extensions'

export default class Extensions extends React.Component<{}, {}> {
    render () {
        const links = [
            {
                name: 'Группы',
                slug: 'groups'
            },
            {
                name: 'Установка модулей',
                slug: 'install'
            },
            {
                name: 'Экспорт модулей',
                slug: 'export'
            },
            {
                name: 'Таблицы',
                slug: 'tables'
            },
            {
                name: 'Модули',
                slug: 'binds'
            }
        ]

        return (
            <Layout>
                <Aside>
                    {
                        links.map(link => {
                            return (
                                <NavLink
                                    key={link.slug}
                                    to={`/${base}/${link.slug}`}
                                    className={css.link}
                                    activeClassName={css.active}>
                                    {link.name}
                                </NavLink>
                            )
                        })
                    }
                </Aside>

                <Content>
                    Entities!
                </Content>
            </Layout>
        )
    }
}
