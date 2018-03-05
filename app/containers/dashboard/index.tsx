import * as React from 'react'

import {
    Dialog,
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
    renderDialog = () => {
        return (
            <React.Fragment>
                <Dialog type="alert" title="Предупреждение!" />
                <br /> <br />
                <Dialog
                    type="prompt"
                    title="Какой сейчас год?"
                    placeholder="Укажите текущий год"
                    value={2018}
                />
                <br /> <br />
                <Dialog
                    type="prompt"
                    title="Какой сейчас год?"
                    placeholder="Укажите текущий год"
                />
                <br /> <br />
                <Dialog
                    type="confirm"
                    title="Вы уверены что хотите удалить файл?"
                />
                <br /> <br />
                <Dialog
                    type="confirm"
                    title="Вы уверены что хотите удалить файл?"
                />
            </React.Fragment>
        )
    }

    renderTabs = () => {
        return (
            <React.Fragment>
                <Tabs title="tabs test" />
            </React.Fragment>
        )
    }

    renderSandwich = () => {
        return (
            <React.Fragment>
                <Sandwich /> <br /> <br />
                <Sandwich isOpened /> <br /> <br />
            </React.Fragment>
        )
    }

    renderSwitch = () => {
        return (
            <React.Fragment>
                <Switch name="switch1" />
                <br /><br />
                <Switch name="switch2" checked />
                <br /><br />
                <Switch name="switch3" round />
            </React.Fragment>
        )
    }

    renderInput = () => {
        return (
            <React.Fragment>
                <Input name="input1" value="Входящие общие папки" cleaned /><br /><br />
                <Input name="input2" value="Входящие общие папки" cleaned /><br /><br />
                <Input name="input3" focus />
            </React.Fragment>
        )
    }

    renderColorPicker = () => {
        return (
            <React.Fragment>
                <ColorPicker />
                <br /><br />
                <ColorPicker color="#f00" />
            </React.Fragment>
        )
    }

    renderRadio = () => {
        return (
            <React.Fragment>
                <Radio name="radio" label="1 Входящие" value={1} /><br /><br />
                <Radio name="radio" label="2 Входящие" value={2} /><br /><br />
                <Radio name="radio" label="3 Входящие" value={3} /><br /><br />
            </React.Fragment>
        )
    }

    renderCheckbox = () => {
        return (
            <React.Fragment>
                <Checkbox name="hecke1" /><br /><br />
                <Checkbox name="hecke2" checked /><br /><br />
                <Checkbox name="hecke3" label="Корзина" />
            </React.Fragment>
        )
    }

    renderButton = () => {
        return (
            <React.Fragment>
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
                <Button variant="normal">Применить</Button><br /><br />
                <Button variant="primary">Применить</Button><br /><br />
                <Button variant="success">Применить</Button><br /><br />
                <Button variant="warning">Применить</Button><br /><br />
                <Button variant="subtle-link">Применить</Button><br /><br />
            </React.Fragment>
        )
    }

    renderBadge = () => {
        return (
            <React.Fragment>
                <Badge>badge default</Badge><br /><br />
                <Badge variant="info">badge info</Badge><br /><br />
                <Badge variant="primary">badge primary</Badge><br /><br />
                <Badge variant="success">badge success</Badge><br /><br />
                <Badge variant="warning">badge warning</Badge><br /><br />
                <Badge variant="danger">badge danger</Badge><br /><br />
            </React.Fragment>
        )
    }

    render () {
        return (
            <Content>
                <Widget title="Общее использование">
                    <div>Свободное место</div>
                </Widget>

                <Widget title="Использовано свободного места">
                    <div>
                        <Loader />
                        <Spinner /><br /><br />
                        <Quantity name="count" min={1} max={999} step={1} /><br /><br />
                        {this.renderDialog}
                        <br /><br />
                        {this.renderTabs}
                        <br /><br />
                        {this.renderSandwich}
                        <br /><br />
                        {this.renderSwitch}
                        <br /><br />
                        {this.renderInput}
                        <br /><br />
                        {this.renderColorPicker}
                        <br /><br />
                        {this.renderRadio}
                        <br /><br />
                        {this.renderCheckbox}
                        <br /><br />
                        {this.renderButton}
                        <br /><br />
                        {this.renderBadge}
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
