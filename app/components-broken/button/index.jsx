import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        variant: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }

    static defaultProps = {
        type: 'button',
        variant: 'default'
    }

    handleClick () {
        console.log('click')
    }

    render () {
        return (
            <button
                type={this.props.type}
                className={`${css.button} ${css[`button_${this.props.variant}`]}`}
                onClick={this.handleClick}
            >
                {this.props.label || this.props.children}
            </button>
        )
    }
}
