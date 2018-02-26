import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

import { GroupLinks } from 'components'

export default class Settings extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    <GroupLinks
                        base="settings"
                        links={[
                            {
                                name: 'Настройка меню',
                                slug: 'menu'
                            },
                            {
                                name: 'Настройки системы',
                                slug: 'system'
                            },
                            {
                                name: 'Виджеты',
                                slug: 'widgets'
                            },
                            {
                                name: 'Кэширование',
                                slug: 'caching'
                            },
                            {
                                name: 'База знаний',
                                slug: 'knowledge-base'
                            },
                            {
                                name: 'Шаблоны сообщений',
                                slug: 'templates'
                            }
                        ]}
                    />
                </Aside>

                <Content>
                    Settings!
                </Content>
            </Layout>
        )
    }
}
