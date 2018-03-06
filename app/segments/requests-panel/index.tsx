import * as React from 'react'
import * as css from './styles.scss'

import { ChangeView } from 'components'

export default class RequestsPanel extends React.Component<{}, {}> {
    render () {
        return (
            <div className={css.requests}>
                <button type="button" className={css.button}>
                    Добавить контакт
                </button>

                <div className={css.right}>
                    <ChangeView />
                </div>
            </div>
        )
    }
}
