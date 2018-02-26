import * as React from 'react'

import { Content } from 'segments'

import { Widget } from 'components'

export default class Dashboard extends React.Component<{}, {}> {
    render () {
        return (
            <Content>
                <Widget title="Общее использование">
                    <div>Свободное место</div>
                </Widget>

                <Widget title="Использовано свободного места">
                    <div>
                        Входящие
                        Входящие общие папки
                        Корзина
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
