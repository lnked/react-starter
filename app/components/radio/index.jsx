import React, { PureComponent } from 'react'
import { propTypes, defaultProps, oneOfType, string, bool, func, number } from 'prop-types'
import css from './styles.scss'

export default class Radio extends PureComponent {

    static propTypes = {
        name: string.isRequired,
        checked: bool,
        label: string,
        children: string,
        handleChange: func,
        value: oneOfType([
            string,
            number
        ])
    }

    static defaultProps = {
        label: '',
        checked: false,
        handleChange: (value) => { console.log('check radio: = ', value) }
    }

    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.props.handleChange(e.nativeEvent.target.value)
    }

    render () {
        return (
            <label className={css.radio}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    className={css.input}
                    checked={this.props.checked}
                    onChange={this.handleChange.bind(this)}
                />
                <span className={css.label}>{this.props.label || this.props.children}</span>
            </label>
        )
    }
}
