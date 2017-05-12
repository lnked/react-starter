import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { Radio } from 'components'

export default class RadioGroup extends Component {

    static propTypes = {
        items: PropTypes.array,
        checked: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        handleChange: PropTypes.func
    }

    static defaultProps = {
        items: [],
        handleChange: (value) => { console.log('change value: = ', value) }
    }

    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {
        this.setState({
            checked: this.props.checked
        })
    }

    handleChange (value) {
        this.setState({
            checked: value
        })

        this.props.handleChange(value)
    }

    renderGroup () {
        if (this.props.items && this.props.items.length) {
            const group = []
            const items = this.props.items

            items.map((props, id) => {
                if (props.value === Number(this.state.checked)) {
                    props.checked = true
                } else {
                    props.checked = false
                }

                group.push(
                    <div key={id.toString()} className={css.group__item}>
                        <Radio {...props} handleChange={this.handleChange.bind(this)} />
                    </div>
                )
            })

            return (
                <div className={css.group}>
                    { group }
                </div>
            )
        }
    }

    render () {
        return (
            <div className={css.group}>
                { this.renderGroup() }
            </div>
        )
    }
}
