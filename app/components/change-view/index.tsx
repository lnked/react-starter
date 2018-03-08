import * as React from 'react'
import * as css from './styles.scss'

interface T {
    view: string;
    showTitle: boolean;
    className: string;
    handleClick: ((type: string) => void);
}

export default class ChangeView extends React.Component<T, {}> {
    static defaultProps = {
        className: '',
        showTitle: true,
        handleClick: (type) => {
            console.log('click button: ', type)
        }
    }

    handleClick = (e) => (type: string) => {
        e.preventDefault()

        this.props.handleClick(type)
    }

    renderItem = (type: string, name: string) => {
        const cn: any = []
        const label: any = []

        cn.push(css.item)
        cn.push(`${css[`item_${type}`]}`)

        if (type === this.props.view) {
            cn.push(css.item_active)
        }

        if (this.props.showTitle) {
            cn.push(css.item_single)

            label.push(
                <span className={css.label} key="label">{ name }</span>
            )
        } else {
            cn.push(css.item_half)
        }

        return (
            <button type="button" className={cn.join(' ')} onClick={this.handleClick.bind(this, type)}>
                <svg className={css.icon} role="presentation" aria-hidden="true" aria-labelledby="title">
                    <use xlinkHref={`#${type}`} />
                </svg>

                { label }
            </button>
        )
    }

    render () {
        const cn: any = []

        const { className, showTitle } = this.props

        cn.push(css.view)

        if (!showTitle) {
            cn.push(css.half)
        }

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                { this.renderItem('table', 'Таблица') }
                { this.renderItem('list', 'Список') }
            </div>
        )
    }
}
