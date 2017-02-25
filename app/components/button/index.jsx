import React, { Component } from 'react'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        mod: React.PropTypes.string,
        type: React.PropTypes.string,
        label: React.PropTypes.string
    }

    static defaultProps = {
        mod: 'default',
        type: 'button',
        label: 'Button'
    }

    handleClick () {
        console.log('click')
    }

    render () {
        return (
            <button
                type={this.props.type}
                className={[css.button, ['button', this.props.mod].join('--')].join(' ')}
                onClick={this.handleClick}
            >
                {this.props.label}
            </button>
        )
    }
}
