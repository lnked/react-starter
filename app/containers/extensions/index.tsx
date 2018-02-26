import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

import { GroupLinks } from 'components'

export default class Extensions extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    <GroupLinks
                        base="extensions"
                        links={[
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
                        ]}
                    />
                </Aside>

                <Content>
                    Entities!
                </Content>
            </Layout>
        )
    }
}
