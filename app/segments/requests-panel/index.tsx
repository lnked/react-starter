import * as React from 'react'
import * as css from './styles'

export default class RequestsPanel extends React.Component<{}, {}> {
    render () {
        // breadcrumbs
        return (
            <div className={css.requests}>
                <a className="fm-back-button" />

                <div className={css.right}>
                    <button type="button" className={css.button}>
                        Добавить контакт
                    </button>

                    <button type="button" className={css.button}>
                        Значки
                    </button>

                    <button type="button" className={css.button}>
                        Вид списка
                    </button>
                </div>
            </div>
        )
    }
}
