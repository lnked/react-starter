import * as React from 'react'
import * as css from './styles.scss'

export interface T {
    className?: string;
    children?: React.ReactChild;
}

export default class Content extends React.Component<T, {}> {
    render () {
        const cn: Array<string> = []
        const { className, children } = this.props

        cn.push(css.content)

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
