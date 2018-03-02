import * as React from 'react'

import {
    Alert,
    Prompt,
    Confirm,
    Content
} from 'segments'

import {
    Tabs,
    Input,
    Radio,
    Badge,
    Switch,
    Loader,
    Widget,
    Button,
    Spinner,
    Sandwich,
    Quantity,
    Checkbox,
    ColorPicker
} from 'components'

export default class Dashboard extends React.Component<{}, {}> {
    render () {
        return (
            <Content>
                <Widget title="Общее использование">
                    <div>Свободное место</div>
                </Widget>

                <Widget title="Использовано свободного места">
                    <div>
                        <Alert title="Предупреждение!" />
                        <br /> <br />
                        <Prompt title="Какой сейчас год?" placeholder="Укажите текущий год" value={2018} />
                        <br /> <br />
                        <Prompt title="Какой сейчас год?" placeholder="Укажите текущий год" />
                        <br /> <br />
                        <Confirm title="Вы уверены что хотите удалить файл?" />
                        <br /> <br />
                        <Confirm title="Вы уверены что хотите удалить файл?" />
                        <br /> <br />
                        <Tabs title="tabs test" />
                        <br /> <br />
                        <Sandwich /> <br /> <br />
                        <Sandwich isOpened /> <br /> <br />
                        <Switch name="switch1" />
                        <br /><br />
                        <Switch name="switch2" checked />
                        <br /><br />
                        <Switch name="switch3" round />
                        <br /><br />

                        <Input name="input1" value="Входящие общие папки" cleaned /><br /><br />
                        <Input name="input2" value="Входящие общие папки" cleaned /><br /><br />
                        <Input name="input3" focus />

                        <br /><br />
                        <ColorPicker />
                        <br /><br />
                        <ColorPicker color="#f00" />
                        <br /><br />

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
                        <Button variant="subtle-link">Применить</Button><br /><br />

                        <Badge variant="info">badge info</Badge><br /><br />
                        <Badge variant="default">badge default</Badge><br /><br />
                        <Badge variant="primary">badge primary</Badge><br /><br />
                        <Badge variant="success">badge success</Badge><br /><br />
                        <Badge variant="warning">badge warning</Badge><br /><br />
                        <Badge variant="danger">badge danger</Badge><br /><br />

                        <Loader /><br /><br />
                        <Spinner /><br /><br />
                        <Quantity /><br /><br />
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
