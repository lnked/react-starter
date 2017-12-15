import React, { PureComponent } from 'react'
import { oneOf, oneOfType, object, string, array, func, bool } from 'prop-types'

import css from './styles.scss'

export default class Button extends PureComponent {
    static propTypes = {
        type: string,
        label: string,
        size: oneOf([
            'small',
            'normal',
            'medium',
            'large'
        ]),
        variant: oneOf([
            'pure',
            'link',
            'subtle-link',
            'info',
            'default',
            'primary',
            'success',
            'warning',
            'danger'
        ]),
        handleClick: oneOfType([
            func,
            bool
        ]),
        children: oneOfType([
            array,
            string,
            object
        ]),
        isIcon: bool,
        className: string,
        isDisabled: bool
    }

    static defaultProps = {
        className: '',
        size: 'normal',
        type: 'button',
        variant: 'default',
        isIcon: false,
        isDisabled: false,
        handleClick: () => { console.log(' click button ') }
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick()
        }
    }

    render () {
        const cn = []
        const { label, children, type, size, variant, isIcon, isDisabled, className } = this.props

        cn.push(`${css.button}`)
        cn.push(`${css[`${size}`]}`)
        cn.push(`${css[`${variant}`]}`)

        if (className) {
            cn.push(className)
        }

        if (isIcon) {
            cn.push(css.icon)
        }

        return (
            <button type={type} onClick={this.handleClick.bind(this)} className={cn.join(' ')} disabled={isDisabled}>
                {label || children}
            </button>
        )
    }
}
