import React, { Component } from 'react';
import Button from 'components/button';
import css from './styles.scss';

export default class AuthForm extends Component {

    constructor (props) {
        super(props);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log('handleSubmit');
        return false;
    }

    render () {
        return (
            <form action="" onSubmit={this.handleSubmit} className={css.login} method="POST">
                <div className={css.login__row}>
                    <input
                        type="text"
                        name="login"
                        autoComplete="off"
                        className="login__input"
                    />
                </div>

                <div className={css.login__row}>
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        className="login__input"
                    />
                </div>

                <div className={css.login__row}>
                    <div className="login__col">
                        <span className="c-checkbox__label__middle">Запомнить меня</span>
                    </div>

                    <div className="login__col">
                        <Button type="submit" label="Войти" mod="success" />
                    </div>
                </div>
            </form>
        );
    }
}
