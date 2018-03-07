import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import css from './styles.scss'

import { TextField } from 'components'

export default class SignField extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        placeholder: ''
    }

    render () {
        return (
            <div className={css.control}>
                <span className={css.symbol}>
                    { this.props.symbol }
                </span>

                <TextField
                    name={this.props.name}
                    cleaning={false}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}
