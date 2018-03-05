import * as React from 'react'
import { LocationProps } from 'typings/location'
import * as css from './styles.scss'

export default function NoMatch ({ location }: LocationProps) {
    document.title = '404 Not Found'

    return (
        <div className={css.error}>
            <div className={css.figure}>
                <img
                    src={require('images/logo.svg')}
                    className={css.figure__image}
                    alt="Error: 4xx"
                />
            </div>

            <div className={css.content}>
                <h1 className={css.title}>Ошибка (4xx)</h1>
                <p className={css.description}>
                    Не удалось найти страницу <code>{location.pathname}</code>.
                </p>
            </div>
        </div>
    )
}
