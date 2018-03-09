import * as React from 'react'
import * as css from './styles.scss'

interface T {
    symbol: string;
    hidden: boolean;
    className: string;
    children: string | React.ReactChild | React.ReactNode | any[];
}

export default class Icon extends React.PureComponent<T, {}> {
    static defaultProps = {
        symbol: '',
        hidden: false,
        className: ''
    }

    render () {
        const cn: any = []
        const { symbol, hidden, children, className } = this.props

        const baseUrl = window.location.href.replace(window.location.hash, '')

        cn.push(css.icon)

        if (className) {
            cn.push(className)
        }

        const icon: any = []

        if (children) {
            icon.push(
                <span className={cn.join(' ')}>
                    {children}
                </span>
            )
        } else if (symbol) {
            icon.push(
                <svg className={cn.join(' ')} key={`icon_${symbol}`} role="presentation" aria-hidden={hidden}>
                    <use xlinkHref={`${baseUrl}#${symbol}`} />
                </svg>
            )
        }

        return (
            <React.Fragment>
                {icon}
            </React.Fragment>
        )
    }
}
