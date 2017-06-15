import React, { PureComponent } from 'react'
import { oneOfType, string, bool, func, number } from 'prop-types'
import css from './styles.scss'

export default class Checkbox extends PureComponent {
    static propTypes = {
        name: string.isRequired,
        label: string,
        children: string,
        checked: bool,
        handleChange: func,
        value: oneOfType([
            string,
            number
        ])
    }

    static defaultProps = {
        label: '',
        checked: false,
        handleChange: (value) => { console.log('check checkbox: = ', value) }
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

    handleChange (e) {
        const checked = e.nativeEvent.target.value

        this.setState({
            checked: !this.state.checked
        })

        this.props.handleChange(checked)
    }

    render () {
        return (
            <label className={css.checkbox}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.value}
                    className={css.input}
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this)}
                />
                <span className={css.label}>{this.props.label || this.props.children}</span>
            </label>
        )
    }
}
