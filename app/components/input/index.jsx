import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        className: PropTypes.string,
        handleChange: PropTypes.func
    }

    static defaultProps = {
        type: 'text',
        value: '',
        className: '',
        handleChange: null
    }

    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
        this._input.focus()
    }

    handleChange (e) {
        this.props.handleChange(e.nativeEvent.target.value)
        // this.props.handleChange(e.target.value)
    }

    render () {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
                ref={(c) => {
                    this._input = c
                }}
                className={[css.input, this.props.className].join(' ')}
            />
        )
    }
}

