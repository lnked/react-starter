import * as React from 'react'
import * as css from './styles.scss'

interface T {
    size: 'small' | 'normal' | 'medium' | 'big';
    type: 'primary' | 'secondary';
    label: string;
    className: string;
    children: string | React.ReactChild | React.ReactNode | any[];
}

export default class Title extends React.Component<T, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'primary',
        className: ''
    }

    render () {
        const cn: Array<string> = []
        const { type, size, label, children, className } = this.props

        cn.push(css.title)

        if (type) {
            cn.push(css[`title_${type}`])
        }

        if (size) {
            cn.push(css[`title_size--${size}`])
        }

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {label || children}
            </div>
        )
    }
}
