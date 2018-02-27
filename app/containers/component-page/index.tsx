import * as React from 'react'
import * as css from './styles'

// import VirtualizedSelect from 'react-virtualized-select'

// import 'react-select/dist/react-select.css'
// import 'react-virtualized/styles.css'
// import 'react-virtualized-select/styles.css'

import components from './request.json'

import { CustomComponent } from 'components'

import { DateTime } from 'utils'

// import Noty from 'noty'

export default class ComponentPage extends React.Component<{}, {}> {
    state = {}

    renderComponents () {
        const list: any = []

        components.map((component: any, id: string) => {
            list.push(
                <div key={id.toString()} className={css.component}>
                    <div className={css.title}>{component.name}</div>
                    <CustomComponent name={component.name} prop={component.prop} />
                </div>
            )
        })

        return (
            <div>
                {list}
            </div>
        )
    }

    render () {
        // const options = [
        //     { label: 'One', value: 1 },
        //     { label: 'Two', value: 2 },
        //     { label: 'Three', value: 3, disabled: true }
        // ]

        // new Noty({
        //     text: 'Notification text'
        // }).show()

        // new Noty({
        //     type: 'warning',
        //     layout: 'topRight',
        //     theme: 'mint', /* relax, mint, metroui */
        //     text: 'Interactive example',
        //     timeout: 5000,
        //     progressBar: true,
        //     closeWith: ['click', 'button'],
        //     animation: {
        //         open: 'noty_effects_open',
        //         close: 'noty_effects_close'
        //     },
        //     id: false,
        //     force: false,
        //     killer: false,
        //     queue: 'global',
        //     container: false,
        //     buttons: [],
        //     sounds: {
        //         sources: [],
        //         volume: 1,
        //         conditions: []
        //     },
        //     titleCount: {
        //         conditions: []
        //     },
        //     modal: false
        // }).show()

        // <VirtualizedSelect
        //     options={options}
        //     onChange={(selectValue) => this.setState({ selectValue })}
        //     value={this.state.selectValue}
        // />

        return (
            <div>
                <DateTime value={1515566090473} format="DD.MM.YYYY" />
                {this.renderComponents()}
            </div>
        )
    }
}
