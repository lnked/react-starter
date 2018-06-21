import * as React from 'react'
import * as css from './styles.scss'

export interface T {
    className?: string;
    children?: React.ReactChild;
}

export default class Layout extends React.Component<T, {}> {
    static defaultProps = {
        children: '',
        className: ''
    }

    render () {
        const cn: Array<string> = []
        const { className, children } = this.props

        cn.push(css.layout)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {children}
            </div>
        )
    }
}
