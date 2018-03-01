import * as React from 'react'

import { Content } from 'segments'

import { Widget, Button, Checkbox, Radio } from 'components'

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
                            <Radio name="radio" label="1 Входящие" value={1} /><br /><br />
                            <Radio name="radio" label="2 Входящие" value={2} /><br /><br />
                            <Radio name="radio" label="3 Входящие" value={3} /><br /><br />
                        </div>

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
                        <br /><br />
                        <Button>Применить</Button><br /><br />
                        <Button size="small">Применить</Button><br /><br />
                        <Button size="normal">Применить</Button><br /><br />
                        <Button size="medium">Применить</Button><br /><br />
                        <Button size="large">Применить</Button><br /><br />
                        <br /><br />
                        <Button variant="pure">Применить</Button><br /><br />
                        <Button variant="link">Применить</Button><br /><br />
                        <Button variant="info">Применить</Button><br /><br />
                        <Button variant="danger">Применить</Button><br /><br />
                        <Button variant="default">Применить</Button><br /><br />
                        <Button variant="primary">Применить</Button><br /><br />
                        <Button variant="success">Применить</Button><br /><br />
                        <Button variant="warning">Применить</Button><br /><br />
                        <Button variant="subtle-link">Применить</Button>
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
