import React, { Component } from 'react'
import css from './styles.scss'

import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
// import 'react-virtualized/styles.css'
// import 'react-virtualized-select/styles.css'

import components from './request.json'

import { CustomComponent } from 'components'

import Noty from 'noty'

export default class ComponentPage extends Component {
    constructor (props) {
        super(props)

        this.state = {}
    }

    renderComponents () {
        const list = []

        components.map((component, id) => {
            list.push(
                <div key={id.toString()} className={css.component}>
                    <div className={css.title}>{component.name}</div>
                    <CustomComponent name={component.name} prop={component.prop} />
                </div>
            )
        })

        return (
            <div>
                { list }
            </div>
        )
    }

    render () {
        const options = [
            { label: 'One', value: 1 },
            { label: 'Two', value: 2 },
            { label: 'Three', value: 3, disabled: true }
        ]

        new Noty({
            text: 'Notification text'
        }).show()

        new Noty({
            type: 'warning',
            layout: 'topRight',
            theme: 'mint', /* relax, mint, metroui */
            text: 'Interactive example',
            timeout: 5000,
            progressBar: true,
            closeWith: ['click', 'button'],
            animation: {
                open: 'noty_effects_open',
                close: 'noty_effects_close'
            },
            id: false,
            force: false,
            killer: false,
            queue: 'global',
            container: false,
            buttons: [],
            sounds: {
                sources: [],
                volume: 1,
                conditions: []
            },
            titleCount: {
                conditions: []
            },
            modal: false
        }).show()

        return (
            <div>
                <VirtualizedSelect
                    options={options}
                    onChange={(selectValue) => this.setState({ selectValue })}
                    value={this.state.selectValue}
                />
                { this.renderComponents() }
            </div>
        )
    }
}
