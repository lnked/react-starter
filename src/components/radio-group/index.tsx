import * as React from 'react'
import * as css from './styles.scss'

import { Radio } from 'components'

interface T {
    type?: string;
    items: any;
    checked?: boolean | number;
    handleChange: (value: number | string | boolean) => void | boolean;
}

interface S {
    checked: boolean | number;
}

export default class RadioGroup extends React.Component<T, S> {
    static defaultProps = {
        type: 'normal',
        items: [],
        handleChange: (value) => {
            console.log('change value: = ', value)
        }
    }

    state = {
        checked: this.props.checked || false
    }

    handleChange = (value) => {
        this.setState({
            checked: value
        })

        this.props.handleChange(value)
    }

    renderGroup = () => {
        const {
            items
        } = this.props

        // const {
        //     checked
        // } = this.state

        if (items && items.length) {
            const group: any = []

            items.map((props, id) => {
                console.log(props)

                // if (!checked && props.value === Number(checked)) {
                //     props.checked = true
                // } else {
                //     props.checked = false
                // }

                group.push(
                    <div key={id} className={css.item}>
                        <Radio {...props} handleChange={this.handleChange} />
                    </div>
                )
            })

            return (
                <div className={css.group}>
                    { group }
                </div>
            )
        }

        return ''
    }

    render () {
        return (
            <div className={`${css.group} ${css[`group_${this.props.type}`]}`}>
                { this.renderGroup() }
            </div>
        )
    }
}
