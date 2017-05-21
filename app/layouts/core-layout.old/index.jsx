import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'utils'
import { Navigation, Sidebar } from 'segments'

import {
    Radio,
    Switch,
    Button,
    Checkbox,
    TextField
    // RadioGroup,
    // SelectionBox
} from 'components'

// import Icon from 'react-svg-use'
// <Icon id="logo" color="#D71421" />

export default class CoreLayout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <div className={css.layout}>
                <header className={css.layout__header}>
                    <Navigation />
                </header>

                <sidebar className={css.layout__sidebar}>
                    <Sidebar />
                </sidebar>

                <section className={css.layout__main}>
                    <div className={css.layout__main__content}>

                        <Radio
                            name="r1"
                            value="1"
                            label="Параметр 1"
                            checked={true}
                        />

                        <Radio
                            name="r2"
                            value="1"
                            label="Параметр 2"
                        />

                        <Switch />

                        <Button label="Button test" />
                        <Button label="Button test" variant="primary" />

                        <Checkbox
                            name="text1"
                            value="1"
                            label="Параметр 1"
                        />

                        <Checkbox
                            name="text1"
                            value="2"
                            label="Параметр 2"
                            checked={true}
                        />

                        <TextField
                            name="text1"
                            multiline={true}
                            value="Textarea multiline example"
                            placeholder="Введите текст…"
                        />

                        <TextField
                            focus={true}
                            name="text4"
                            placeholder="Введите текст…"
                            hint="Поле с автофокусом"
                        />

                        <TextField
                            focus={true}
                            name="text4"
                            placeholder="Введите текст…"
                            error={true}
                        />

                        <TextField
                            focus={true}
                            name="text4"
                            placeholder="Введите текст…"
                            error="Данные введены не корректно"
                        />

                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
