import React, { Component } from 'react'
import css from './styles.scss'

import components from './request.json'

import { CustomComponent } from 'components'

export default class ComponentPage extends Component {
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
        return (
            <div>
                { this.renderComponents() }
            </div>
        )
    }
}
