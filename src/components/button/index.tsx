import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    type?: string;
    size?: 'small' | 'large' | 'normal' | 'medium';
    label?: string;
    isIcon?: boolean;
    variant?: 'pure' | 'link' | 'info' | 'danger' | 'normal' | 'primary' | 'success' | 'warning' | 'subtle-link';
    className?: string;
    isDisabled?: boolean;
    children?: JSX.Element[] | JSX.Element | string;
    handleClick?: () => void | boolean;
}

const cx = classes.bind(css)

export class Button extends React.PureComponent<P, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'button',
        variant: 'normal',
        isIcon: false,
        isDisabled: false,
        handleClick: () => {
            console.log(' click button ')
        },
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick()
        }
    }

    render () {
        const { label, children, type, size, variant, isIcon, isDisabled, className } = this.props

        return (
            <button
                type={type}
                onClick={this.handleClick}
                className={cx(css.button, { icon: isIcon }, [size], [variant], className)}
                disabled={isDisabled}>
                {label || children}
            </button>
        )
    }
}
