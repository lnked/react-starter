import styles from './styles.scss';
import React, { Component } from 'react';

export default class NoMatch extends Component {

    componentWillMount () {
        document.title = '404 Not Found';
    }

    render () {
        return (
            <div className={styles['not-found']}>
                <div className={styles['not-found__figure']}>
                    <img
                        src={require('images/react.svg')}
                        className={styles['not-found__figure__image']}
                        alt="Error: 4xx" />
                </div>

                <div className={styles['not-found__content']}>
                    <h1 className={styles['not-found__content__title']}>Ошибка (4xx)</h1>
                    <p className={styles['not-found__content__description']}>
                        Не удалось найти страницу, которую вы ищете.
                    </p>
                </div>
            </div>
        );
    }
}
