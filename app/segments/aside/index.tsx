import * as React from 'react'
import * as css from './styles.scss'

interface T {
    title?: string;
    className?: string;
    children?: string | React.ReactChild | React.ReactNode | any[];
}

export default class Aside extends React.Component<T, {}> {
    render () {
        const cn: any = []
        const { title, className, children } = this.props

        cn.push(css.aside)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                <div className={css.title}>
                    {title}
                </div>

                {children}
            </div>
        )
    }
}
