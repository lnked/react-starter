import React, { Component } from 'react'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        type: React.PropTypes.string,
        label: React.PropTypes.string,
        variant: React.PropTypes.string,
        children: React.PropTypes.element.isRequired
    }

    static defaultProps = {
        type: 'button',
        label: 'Button',
        variant: 'default'
    }

    handleClick () {
        console.log('click')
    }

    render () {
        return (
            <button
                type={this.props.type}
                className={[css.button, ['button', this.props.variant].join('--')].join(' ')}
                onClick={this.handleClick}
            >
                {this.props.children || this.props.label}
            </button>
        )
    }
}
