import * as React from 'react'

import {
    Dialog,
    Content
} from 'segments'

import {
    Tabs,
    Input,
    Title,
    Radio,
    Badge,
    Switch,
    Loader,
    Widget,
    Button,
    Spinner,
    Sandwich,
    Quantity,
    // Truncate,
    Checkbox,
    SpeechText,
    ColorPicker,
    SelectionBox
} from 'components'

export default class Dashboard extends React.Component<{}, {}> {
    renderDialog = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Dialog type="alert" title="Предупреждение!" />
                <Dialog type="prompt" title="Какой сейчас год?"
                    placeholder="Укажите текущий год"
                    value={2018}
                />
                <Dialog
                    type="prompt"
                    title="Какой сейчас год?"
                    placeholder="Укажите текущий год"
                />
                <Dialog
                    type="confirm"
                    title="Вы уверены что хотите удалить файл?"
                />
                <Dialog
                    type="confirm"
                    title="Вы уверены что хотите удалить файл?"
                />
            </div>
        )
    }

    renderTitle = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Title size="small" type="primary" label="Test title" />
                <Title size="small" type="secondary" label="Test title" />
                <Title size="normal" type="primary" label="Test title" />
                <Title size="normal" type="secondary" label="Test title" />
                <Title size="small" type="secondary" label="Test title" />
                <Title size="medium" type="primary" label="Test title" />
                <Title size="medium" type="secondary" label="Test title" />
                <Title size="small" type="secondary" label="Test title" />
                <Title size="big" type="primary" label="Test title" />
                <Title size="big" type="secondary" label="Test title" />
            </div>
        )
    }

    // renderTruncate = () => {
    //     return (
    //         <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
    //             <Truncate length={100}>
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //             </Truncate>
    //             <br /><br />
    //             <Truncate rows={2}>
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //             </Truncate>
    //         </div>
    //     )
    // }

    renderTabs = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Tabs title="tabs test" />
            </div>
        )
    }

    renderSelectionBox = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <SelectionBox
                    items={[
                        {
                            label: 'Первый',
                            value: 1
                        },
                        {
                            label: 'Второй',
                            value: 2
                        },
                        {
                            label: 'Третий',
                            value: 3
                        },
                        {
                            label: 'Четвертый',
                            value: 4
                        },
                        {
                            label: 'Пятый',
                            value: 5
                        },
                        {
                            label: 'Шестой',
                            value: 6
                        }
                    ]}
                    name="sradio"
                    checked={3}
                    isMultiple={false}
                /><br /><br />
                <SelectionBox
                    items={[
                        {
                            label: 'Первый',
                            value: 1
                        },
                        {
                            label: 'Второй',
                            value: 2
                        },
                        {
                            label: 'Третий',
                            value: 3
                        },
                        {
                            label: 'Четвертый',
                            value: 4
                        },
                        {
                            label: 'Пятый',
                            value: 5
                        },
                        {
                            label: 'Шестой',
                            value: 6
                        }
                    ]}
                    name="scheckbox"
                    checked={[1, 2, 3]}
                    isMultiple={true}
                /><br /><br />
            </div>
        )
    }

    renderSandwich = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Sandwich /> <br /> <br />
                <Sandwich isOpened /> <br /> <br />
            </div>
        )
    }

    renderSwitch = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Switch name="switch1" />
                <br /><br />
                <Switch name="switch2" checked />
                <br /><br />
                <Switch name="switch3" round />
            </div>
        )
    }

    renderInput = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <SpeechText>
                    <Input name="input0" value="" />
                </SpeechText><br /><br />
                <SpeechText>
                    <Input name="input0" value="" multiline={4} />
                </SpeechText><br /><br />
                <Input name="input1" value="Входящие общие папки" cleaned /><br /><br />
                <Input name="input2" value="Входящие общие папки" cleaned /><br /><br />
                <Input name="input3" focus />
            </div>
        )
    }

    renderColorPicker = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <ColorPicker />
                <br /><br />
                <ColorPicker color="#f00" />
            </div>
        )
    }

    renderRadio = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Radio name="radio" label="1 Входящие" value={1} /><br /><br />
                <Radio name="radio" label="2 Входящие" value={2} /><br /><br />
                <Radio name="radio" label="3 Входящие" value={3} /><br /><br />
            </div>
        )
    }

    renderCheckbox = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Checkbox name="hecke1" /><br /><br />
                <Checkbox name="hecke2" checked /><br /><br />
                <Checkbox name="hecke3" label="Корзина" />
            </div>
        )
    }

    renderButton = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Button>Применить</Button><br /><br />
                <Button size="small">Применить</Button><br /><br />
                <Button size="normal">Применить</Button><br /><br />
                <Button size="medium">Применить</Button><br /><br />
                <Button size="large">Применить</Button><br /><br />
                <Button variant="pure">Применить</Button><br /><br />
                <Button variant="link">Применить</Button><br /><br />
                <Button variant="info">Применить</Button><br /><br />
                <Button variant="danger">Применить</Button><br /><br />
                <Button variant="normal">Применить</Button><br /><br />
                <Button variant="primary">Применить</Button><br /><br />
                <Button variant="success">Применить</Button><br /><br />
                <Button variant="warning">Применить</Button><br /><br />
                <Button variant="subtle-link">Применить</Button><br /><br />
            </div>
        )
    }

    renderBadge = () => {
        return (
            <div style={{ marginBottom: '15px', border: '1px solid lime' }}>
                <Badge>badge default</Badge><br /><br />
                <Badge variant="info">badge info</Badge><br /><br />
                <Badge variant="primary">badge primary</Badge><br /><br />
                <Badge variant="success">badge success</Badge><br /><br />
                <Badge variant="warning">badge warning</Badge><br /><br />
                <Badge variant="danger">badge danger</Badge><br /><br />
            </div>
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
                        {this.renderInput()}
                        {this.renderSelectionBox()}
                        {this.renderTitle()}
                        {this.renderDialog()}
                        {this.renderTabs()}
                        {this.renderSandwich()}
                        {this.renderSwitch()}
                        {this.renderColorPicker()}
                        {this.renderRadio()}
                        {this.renderCheckbox()}
                        {this.renderButton()}
                        {this.renderBadge()}
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
