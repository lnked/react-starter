import * as React from 'react'
import * as css from './styles'

interface T {
    title: string;
    value: string;
    placeholder: string;
}

export default class Prompt extends React.PureComponent<T, {}> {
    static defaultProps = {
        title: '',
        value: '',
        placeholder: ''
    }

    render () {
        const props: any = {}
        const { title, value, placeholder } = this.props

        props.defaultValue = value
        props.placeholder = placeholder

        return (
            <div className={css.prompt}>
                <button className={css.close} />

                <div className={css.body}>
                    <div className={css.title}>{ title }</div>
                    <input {...props} className={css.input} />
                </div>

                <footer className={css.footer}>
                    <button className={[css.button, css.cancel].join(' ')}>Отмена</button>
                    <button className={[css.button, css.submit].join(' ')}>Подтвердить</button>
                </footer>
            </div>
        )
    }
}
