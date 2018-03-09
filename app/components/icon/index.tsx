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

        cn.push(css.icon)

        if (className) {
            cn.push(className)
        }

        const icon: any = []

        if (children) {
            icon.push(children)
        } else if (symbol) {
            icon.push(
                <svg className={css.pictogram} key={`icon_${symbol}`} role="presentation" aria-hidden={hidden}>
                    <use xlinkHref={`#${symbol}`} />
                </svg>
            )
        }

        return (
            <span className={cn.join(' ')}>
                {icon}
            </span>
        )
    }
}
