import * as React from 'react'
import * as css from './styles'

interface T {
    className?: string;
    children?: React.ReactChild | {} | any[] | boolean;
}

export default class Aside extends React.Component<T, {}> {
    render () {
        const cn: any = []
        const { className, children } = this.props

        cn.push(css.sidebar)

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
