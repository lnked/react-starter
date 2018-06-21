import * as React from 'react'
// import * as css from './styles.scss'

import styled from 'styled-components'

export interface P {
    title?: string;
    bolded?: boolean;
    variant?: 'info' | 'normal' | 'primary' | 'success' | 'warning' | 'danger';
    children?: React.ReactChild;
    className?: string;
}

const StyledBadge = styled.div`
    padding: 3px;
    font-size: 1.3rem;
    line-height: 1;
    border-radius: 2px;
    display: inline-block;
    vertical-align: baseline;
    font-weight: ${(p: P) => p.bolded === true ? 700 : 400};
`

export default class Badge extends React.PureComponent<P, {}> {
    static defaultProps = {
        title: '',
        bolded: false,
        className: '',
        variant: 'normal'
    }

    render () {
        // const cn: Array<string> = []

        // const { title, children, variant, bolded, className } = this.props
        const { title, children, bolded } = this.props

        // cn.push(css.badge)

        // cn.push(css[`${variant}`])

        // if (bolded) {
        //     cn.push(css.bold)
        // }

        // if (className) {
        //     cn.push(className)
        // }

        return (
            // <div className={cn.join(' ')}>{ title || children }</div>
            <StyledBadge>{ title || children } - {bolded ? '1' : '0'}</StyledBadge>
        )
    }
}
