import * as React from 'react'
import * as css from './styles.scss'

interface T {
    title: string;
    className?: string;
    children?: React.ReactChild;
}

export class Widget extends React.PureComponent<T, {}> {
    render () {
        const cn: Array<string> = []
        const { title, children, className } = this.props

        cn.push(css.widget)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                <div className={css.content}>
                    <div className={css.title}>
                        {title}
                    </div>

                    {children}
                </div>
            </div>
        )
    }
}
