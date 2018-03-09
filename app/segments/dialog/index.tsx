import * as React from 'react'
import * as css from './styles.scss'

import { Icon, Input, Button } from 'components'

interface T {
    type?: 'alert' | 'prompt' | 'confirm';
    title?: string;
    value?: string | number;
    placeholder?: string;
}

export default class Dialog extends React.PureComponent<T, {}> {
    static defaultProps = {
        type: 'alert',
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
            <div className={css.dialog}>
                <button type="button" className={css.close}>
                    <Icon symbol="close" className={css.icon} />
                </button>

                <div className={css.body}>
                    <div className={css.title}>{title}</div>
                    <Input {...props} />
                </div>

                <footer className={css.footer}>
                    <Button variant="danger" className={css.button}>Отмена</Button>
                    <Button variant="success" className={css.button}>Подтвердить</Button>
                </footer>
            </div>
        )
    }
}
