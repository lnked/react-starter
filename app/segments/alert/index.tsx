import * as React from 'react'
import * as css from './styles'

interface T {
    title: string;
}

export default class Alert extends React.PureComponent<T, {}> {
    static defaultProps = {
        title: ''
    }

    render () {
        const props: any = {}
        const { title, value, placeholder } = this.props

        props.defaultValue = value
        props.placeholder = placeholder

        return (
            <div className={css.alert}>
                <button className={css.close} />

                <div className={css.body}>
                    <div className={css.title}>{title}</div>
                </div>

                <footer className={css.footer}>
                    <button className={[css.button, css.cancel].join(' ')}>Отмена</button>
                    <button className={[css.button, css.submit].join(' ')}>Подтвердить</button>
                </footer>
            </div>
        )
    }
}
