import * as React from 'react'

import { Content } from 'segments'

import { Widget, Checkbox } from 'components'

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

                        <br />
                        <br />

                        <div>
                            <Checkbox name="hecke1" />
                        </div>

                        <br />

                        <div>
                            <Checkbox name="hecke2" checked />
                        </div>

                        <br />

                        <div>
                            <Checkbox name="hecke3" label="Корзина" />
                        </div>
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
