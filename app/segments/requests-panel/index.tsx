import * as React from 'react'
import * as css from './styles.scss'

export default class RequestsPanel extends React.Component<{}, {}> {
    render () {
        // breadcrumbs
        // <a className="fm-back-button" />

        return (
            <div className={css.requests}>
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
