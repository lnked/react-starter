import * as React from 'react'
import * as css from './styles.scss'

export interface T {
    hidden?: boolean;
    symbol?: string;
    className?: string;
}

export class Icon extends React.PureComponent<T, {}> {
    static defaultProps = {
        symbol: '',
        hidden: false,
        className: ''
    }

    render () {
        const cn: Array<string> = []
        const { symbol, hidden, className } = this.props

        const baseUrl = window.location.href.replace(window.location.hash, '')

        cn.push(css.icon)

        if (className) {
            cn.push(className)
        }

        return (
            <svg className={cn.join(' ')} key={`icon_${symbol}`} role="presentation" aria-hidden={hidden}>
                <use xlinkHref={`${baseUrl}#${symbol}`} />
            </svg>
        )
    }
}
