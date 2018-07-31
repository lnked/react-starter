import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

interface P {
    symbol: string;
    hidden?: boolean;
    className?: string;
}

const cx = classNames.bind(css)

export class Icon extends React.PureComponent<P, {}> {
    static defaultProps = {
        symbol: '',
        hidden: false,
        className: ''
    }

    baseUrl: string = ''

    componentDidMount () {
        this.baseUrl = window.location.href.replace(window.location.hash, '')
    }

    render () {
        const { symbol, hidden, className } = this.props

        return (
            <svg className={cx({ icon: true }, className)}
                key={`icon_${symbol}`}
                role="presentation" aria-hidden={hidden}>
                <use xlinkHref={`${this.baseUrl}#${symbol}`} />
            </svg>
        )
    }
}
