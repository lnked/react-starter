import * as React from 'react'
import * as css from './styles.scss'

import { Icon, Input, Button } from 'components'

export interface Props {
    type?: 'alert' | 'prompt' | 'confirm';
    title?: string;
    value?: string | number;
    placeholder?: string;
}

export class Dialog extends React.PureComponent<Props, {}> {
    static defaultProps = {
        type: 'alert',
        title: '',
        value: '',
        placeholder: '',
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
                    <Button className={css.button} danger>
                        Отмена
                    </Button>
                    <Button className={css.button} success>
                        Подтвердить
                    </Button>
                </footer>
            </div>
        )
    }
}

export default Dialog
