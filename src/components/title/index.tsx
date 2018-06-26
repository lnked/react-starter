import * as React from 'react'
// import * as css from './styles.scss'

import styled from 'styled-components'

export interface P {
    size: 'small' | 'normal' | 'medium' | 'big';
    type: 'primary' | 'secondary';
    label: string;
    className: string;
    children?: React.ReactChild;
}

const StyledTitle = styled.div`
    font-weight: 700;
    line-height: 1;

    color: ${props =>
        (props.variant === 'primary' && '$black') ||
        (props.variant === 'danger' && '$c-pink-swan')
    };

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export class Title extends React.Component<P, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'primary',
        className: ''
    }

    render () {
        const { label, children, className } = this.props

        // type, size
        // cn.push(css.title)

        // if (type) {
        //     cn.push(css[`title_${type}`])
        // }

        // if (size) {
        //     cn.push(css[`title_size--${size}`])
        // }

        // if (className) {
        //     cn.push(className)
        // }

        return (
            <StyledTitle className={className}>
                {label || children}
            </StyledTitle>
        )
    }
}
