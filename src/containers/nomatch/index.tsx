import * as React from 'react'
import * as css from './styles.scss'

interface Location {
    pathname: string;
}

interface P {
    location: Location;
}

export default function NoMatch ({ location }: P) {
    document.title = '404 Not Found'

    return (
        <div className={css.error}>
            <div className={css.figure}>
                <img
                    src={require('images/logo.svg')}
                    className={css.figureImage}
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
