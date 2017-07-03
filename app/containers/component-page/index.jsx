import React, { Component } from 'react'
import css from './styles.scss'

import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import components from './request.json'

import { CustomComponent } from 'components'

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
