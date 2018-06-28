import * as React from 'react'
import * as css from './styles.scss'
import classNames from 'classnames/bind'

export interface Location {
    pathname: string;
}

export interface P {
    location: Location;
}

const cx = classNames.bind(css)

export const NoMatch = ({ location }: P) => {
    document.title = '404 Not Found'

    return (
        <div className={cx({ error: true })}>
            <div className={cx({ figure: true })}>
                <img src={require('images/logo.svg')} className={cx({ figureImage: true })} alt="Error: 4xx" />
            </div>

            <div className={cx({ content: true })}>
                <h1 className={cx({ title: true })}>Ошибка (4xx)</h1>
                <p className={cx({ description: true })}>
                    Не удалось найти страницу <code>{location.pathname}</code>.
                </p>
            </div>
        </div>
    )
}

export default NoMatch
