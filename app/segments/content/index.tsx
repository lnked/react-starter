import * as React from 'react'
import * as css from './styles'

interface Props {
    className?: string;
    children?: React.ReactChild | {} | any[] | boolean;
}

export default class Content extends React.Component<Props, {}> {
    render () {
        const cn: any = []
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
