import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'

import css from './styles.scss'

export default class Button extends PureComponent {

    static propTypes = {
        size: string,
        type: string,
        label: string,
        variant: string,
        className: string,
        children: oneOfType([
            array,
            string,
            object
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
