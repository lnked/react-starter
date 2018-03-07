import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import css from './styles.scss'

import { TextField } from 'components'

export default class FieldParams extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        checked: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        handleChange: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func
        ]),
        paramsName: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        params: PropTypes.array
    }

    static defaultProps = {
        placeholder: '',
        handleChange: false
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

        if (this.props.handleChange) {
            this.props.handleChange(value)
        }
    }

    renderControl () {
        return (
            <div className={css.input}>
                <TextField
                    name={this.props.name}
                    cleaning={false}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }

    renderParams () {
        if (this.props.params && this.props.params.length) {
            const params = []

            this.props.params.map((props, id) => {
                if (props.value === Number(this.state.checked)) {
                    props.checked = true
                } else {
                    props.checked = false
                }

                params.push(
                    <label key={id.toString()} className={css.param}>
                        <input
                            type="radio"
                            name={this.props.paramsName}
                            value={props.value}
                            checked={props.checked}
                            className={css.param__input}
                            onChange={this.handleChange.bind(this, props.value)}
                        />
                        <span className={css.param__label}>{props.label}</span>
                    </label>
                )
            })

            return (
                <div className={css.params}>
                    { params }
                </div>
            )
        }
    }

    render () {
        return (
            <div className={css.control}>
                { this.renderControl() }
                { this.renderParams() }
            </div>
        )
    }
}
