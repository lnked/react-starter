import * as React from 'react'
// import * as css from './styles'

import { Content } from 'segments'

export default class Settings extends React.Component<{}, {}> {
    render () {
        // <GroupLinks
        //     base="settings"
        //     links={[
        //         {
        //             name: 'Настройка меню',
        //             slug: 'menu'
        //         },
        //         {
        //             name: 'Настройки системы',
        //             slug: 'system'
        //         },
        //         {
        //             name: 'Виджеты',
        //             slug: 'widgets'
        //         },
        //         {
        //             name: 'Кэширование',
        //             slug: 'caching'
        //         },
        //         {
        //             name: 'База знаний',
        //             slug: 'knowledge-base'
        //         },
        //         {
        //             name: 'Шаблоны сообщений',
        //             slug: 'templates'
        //         }
        //     ]}
        // />
        return (
            <Content>
                Settings!
            </Content>
        )
    }
}
