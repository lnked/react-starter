import * as React from 'react'
// import styled from 'styled-components'
// import styled, { ThemeProvider } from 'styled-components'

interface P {
    size: 'tiny' | 'small' | 'normal' | 'medium' | 'huge';
    type: 'primary' | 'secondary';
    label: string;
    center: boolean;
    className: string;
    children?: JSX.Element[] | JSX.Element | string;
}

// color: ${(props: P) =>
//     (props.type === 'primary' && '#000') ||
//     (props.type === 'secondary' && '#f00') ||
//     'blue'};
// font-size: ${(props: P) =>
//     (props.size === 'tiny' && '1rem') ||
//     (props.size === 'small' && '1.2rem') ||
//     (props.size === 'medium' && '1.8rem') ||
//     (props.size === 'huge' && '2.2rem') ||
//     '1.6rem'};
// text-align: ${(props: P) =>
//     (props.center && 'center') ||
//     'left'};

export class Title extends React.Component<P, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'primary',
        center: false,
        className: ''
    }

    render () {
        const { label, children, className, ...rest } = this.props

        return (
            <div className={className} {...rest}>
                {label || children}
            </div>
        )
    }
}
