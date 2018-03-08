import * as React from 'react'
import * as css from './styles.scss'

interface T {
    rows?: number;
    text?: string;
    align?: string;
    length?: string;
    children?: string;
}

interface S {
    title: string;
    length: number;
}

export default class Truncate extends React.Component<T, S> {
    static defaultProps = {
        align: 'left',
        children: ''
    }

    state = {
        title: this.props.children || this.props.text || '',
        length: this.props.length || 0
    }

    renderDots = () => {
        const { title, length } = this.state

        if (title && title.length >= length) {
            return (
                <span>...</span>
            )
        }

        return ''
    }

    renderText = () => {
        const { title, length } = this.state

        return (
            <div className={css.text}>
                { title.substr(0, length) }{ this.renderDots() }
            </div>
        )
    }

    renderTooltip = () => {
        const { title, length } = this.state

        if (title && length >= length) {
            return (
                <div className={css.tooltip}>
                    { title }
                </div>
            )
        }
    }

    render () {
        const cn: any = []

        const { align } = this.props

        cn.push(css.truncate)

        if (align) { 
            cn.push(css[`truncate--align-${align}`])
        }

        return (
            <div className={cn.join(' ')}>
                { this.renderText() }
                { this.renderTooltip() }
            </div>
        )
    }
}
