import * as React from 'react'
import * as css from './styles.scss'

export interface P {
    className?: string;
    children?: JSX.Element[] | JSX.Element | string;
}

export class Content extends React.PureComponent<P, {}> {
    render() {
        const cn: string[] = []
        const { className, children } = this.props

        cn.push(css.content)

        if (className) {
            cn.push(className)
        }

        return <div className={cn.join(' ')}>{children}</div>
    }
}

export default Content
