import * as React from 'react'
import * as css from './styles'

import { Button } from 'components'

interface T {
    title?: string;
    value?: string;
    placeholder?: string;
}

export default class Confirm extends React.PureComponent<T, {}> {
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
            <div className={css.confirm}>
                <button className={css.close} />

                <div className={css.body}>
                    <div className={css.title}>{title}</div>
                </div>

                <footer className={css.footer}>
                    <Button variant="danger" className={css.button}>Отмена</Button>
                    <Button variant="success" className={css.button}>Подтвердить</Button>
                </footer>
            </div>
        )
    }
}
