import * as React from 'react'
// import * as css from './styles.scss'

import styled from 'styled-components'

export interface P {
    title?: string;
    bolded?: boolean;
    variant?: 'info' | 'normal' | 'primary' | 'success' | 'warning' | 'danger';
    children?: JSX.Element[] | JSX.Element | string;
    className?: string;
}

// color: ${props => props.variant};
// border: 1px solid ${props => props.variant};
// background-color: ${props => props.variant};

// background-color: ${props =>
//     (props.variant === 'primary' && '$primary') ||
//     (props.variant === 'danger' && '$danger')
// };

const StyledBadge = styled.div`
    padding: 3px;
    font-size: 1.3rem;
    line-height: 1;
    border-radius: 2px;
    display: inline-block;
    vertical-align: baseline;
    font-weight: ${(props: P) => (props.bolded ? '700' : '400')};
    color: $c-primary-color;
    border: 1px solid $c-info-border;
    background-color: $c-info-background;
`

export class Badge extends React.PureComponent<P, {}> {
    static defaultProps = {
        title: '',
        variant: 'normal',
        className: '',
    }

    render () {
        const { title, className, children, ...rest } = this.props

        return (
            <StyledBadge className={className} {...rest}>
                {title || children}
            </StyledBadge>
        )
    }
}
