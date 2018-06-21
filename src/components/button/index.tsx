import * as React from 'react'
import * as css from './styles.scss'

export interface T {
    type?: string;
    size?: 'small' | 'large' | 'normal' | 'medium';
    label?: string;
    isIcon?: boolean;
    variant?: 'pure' | 'link' | 'info' | 'danger' | 'normal' | 'primary' | 'success' | 'warning' | 'subtle-link';
    className?: string;
    isDisabled?: boolean;
    children?: React.ReactChild;
    handleClick?: () => void | boolean;
}

export default class Button extends React.PureComponent<T, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'button',
        variant: 'normal',
        isIcon: false,
        isDisabled: false,
        handleClick: () => {
            console.log(' click button ')
        }
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick()
        }
    }

    render () {
        const cn: Array<string> = []
        const { label, children, type, size, variant, isIcon, isDisabled, className } = this.props

        cn.push(css.button)
        cn.push(css[`${size}`])
        cn.push(css[`${variant}`])

        if (isIcon) {
            cn.push(css.icon)
        }

        if (className) {
            cn.push(className)
        }

        return (
            <button type={type} onClick={this.handleClick} className={cn.join(' ')} disabled={isDisabled}>
                {label || children}
            </button>
        )
    }
}
