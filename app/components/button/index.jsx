import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        size: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
        variant: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.object
        ])
    }

    static defaultProps = {
        className: '',
        size: 'normal',
        type: 'button',
        variant: 'default'
    }

    handleClick () {
        console.log('click')
    }

    render () {
        const className = []

        className.push(`${css.button}`)
        className.push(`${css[`${this.props.size}`]}`)
        className.push(`${css[`${this.props.variant}`]}`)

        if (this.props.className) {
            className.push(`${this.props.className}`)
        }

        return (
            <button
                type={this.props.type}
                className={className.join(' ')}
                onClick={this.handleClick}>
                {this.props.label || this.props.children}
            </button>
        )
    }
}
