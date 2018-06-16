import * as React from 'react'
import * as css from './styles.scss'

import styled from 'styled-components'

console.log(styled)

interface T {
    title?: string;
    bolded?: boolean;
    className?: string;
    variant?: 'info' | 'normal' | 'primary' | 'success' | 'warning' | 'danger';
    children?: string | React.ReactChild | React.ReactNode | any[];
}

export default class Badge extends React.PureComponent<T, {}> {
    static defaultProps = {
        title: '',
        bolded: false,
        className: '',
        variant: 'normal'
    }

    render () {
        const cn: Array<string> = []

        const { title, children, variant, bolded, className } = this.props

        cn.push(css.badge)

        cn.push(css[`${variant}`])

        if (bolded) {
            cn.push(css.bold)
        }

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>{ title || children }</div>
        )
    }
}
