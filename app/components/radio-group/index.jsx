import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { Radio } from 'components'

export default class RadioGroup extends Component {
    static propTypes = {
        type: PropTypes.string,
        items: PropTypes.array,
        checked: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        handleChange: PropTypes.func
    }

    static defaultProps = {
        type: 'normal',
        items: [],
        handleChange: (value) => {
            console.log('change value: = ', value)
        }
    }

    componentWillMount () {
        this.setState({
            checked: this.props.checked
        })
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

        const {
            checked
        } = this.state

        if (items && items.length) {
            const group = []

            items.map((props, id) => {
                if (props.value === Number(checked)) {
                    props.checked = true
                } else {
                    props.checked = false
                }

                group.push(<div key={id.toString()} className={css.group__item}>
                    <Radio {...props} handleChange={this.handleChange.bind(this)} />
                </div>)
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
            <div className={`${css.group} ${css[`group_${this.props.type}`]}`}>
                { this.renderGroup() }
            </div>
        )
    }
}
