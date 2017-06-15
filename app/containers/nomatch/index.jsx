import css from './styles.scss'
import React, { Component } from 'react'

export default class NoMatch extends Component {
    componentWillMount () {
        document.title = '404 Not Found'
    }

    render () {
        return (
            <div className={css['not-found']}>
                <div className={css['not-found__figure']}>
                    <img
                        src={require('images/react.svg')}
                        className={css['not-found__figure__image']}
                        alt="Error: 4xx" />
                </div>

                <div className={css['not-found__content']}>
                    <h1 className={css['not-found__content__title']}>Ошибка (4xx)</h1>
                    <p className={css['not-found__content__description']}>
                        Не удалось найти страницу, которую вы ищете.
                    </p>
                </div>
            </div>
        )
    }
}
