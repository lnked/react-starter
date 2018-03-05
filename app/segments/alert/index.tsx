import * as React from 'react'
import * as css from './styles'

import { Button } from 'components'

interface T {
    title: string;
}

export default class Alert extends React.PureComponent<T, {}> {
    static defaultProps = {
        title: ''
    }

    render () {
        const { title } = this.props

        return (
            <div className={css.alert}>
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
