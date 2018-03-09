import * as React from 'react'
import * as css from './styles.scss'

interface T {
    symbol: string;
    hidden: boolean;
    className: string;
    children: string | React.ReactChild | React.ReactNode | any[];
}

const baseUrl = window.location.href.replace(window.location.hash, '')

export default class Icon extends React.PureComponent<T, {}> {
    static defaultProps = {
        symbol: '',
        hidden: false,
        className: ''
    }

    render () {
        const cn: any = []
        const { symbol, hidden, children, className } = this.props

        cn.push(css.icon)

        if (className) {
            cn.push(className)
        }

        return (
            <React.Fragment>
                {children
                    ? <span className={cn.join(' ')}>
                        {children}
                    </span>
                    : <svg className={cn.join(' ')} key={`icon_${symbol}`} role="presentation" aria-hidden={hidden}>
                        <use xlinkHref={`${baseUrl}#${symbol}`} />
                    </svg>
                }
            </React.Fragment>
        )
    }
}
