import * as React from 'react'
import * as css from '../styles.scss'

import store from 'store2'

import { withRequest } from 'hocs'

import {
    Link,
    Input,
    Button,
    Checkbox
} from 'components'

export interface P {
    post: ((url: string, data: any) => any);
}

export interface S {
    save: boolean;
    phone: string | number;
    secret: string | number;
}

@withRequest
class Auth extends React.Component<P, S> {
    state = {
        save: store.get('save') || true,
        phone: store.get('phone') || '',
        secret: store.get('secret') || ''
    }

    handleLogin = (e) => {
        e.preventDefault()

        const { post } = this.props
        const { save, phone, secret } = this.state

        if (save) {
            store.set('save', save)
            store.set('phone', phone)
            store.set('secret', secret)
        } else {
            store.remove('save')
            store.remove('phone')
            store.remove('secret')
        }

        post('/account/auth', {
            phone,
            secret
        })
    }

    handleChange = (e, value) =>
        this.setState({...this.state, [e.target.name]: value})

    render () {
        const { save, phone, secret } = this.state

        return (
            <React.Fragment>
                <h1 className={css.title}>Вход</h1>

                <div className={css.fields}>
                    <div className={css.row}>
                        <Input
                            name="phone"
                            value={phone}
                            label="Номер мобильного телефона"
                            handleChange={this.handleChange}
                            masked={{phone: true, phoneRegionCode: 'RU'}}
                        />
                    </div>

                    <div className={css.row}>
                        <Input
                            type="password"
                            name="secret"
                            value={secret}
                            label="Пароль"
                            handleChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className={[css.row, css.helpers].join(' ')}>
                    <Checkbox
                        name="save"
                        label="Запомнить пароль"
                        handleChange={this.handleChange}
                        checked={save}
                    />

                    <Link href={'/auth/sms'} size="tiny">Войти по SMS-коду</Link>
                </div>

                <Button
                    size="large"
                    variant="primary"
                    handleClick={this.handleLogin}
                    wide>Войти</Button>

                <div className={css.center}>
                    <Link href={'/auth/registration'}>Зарегистрироваться</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Auth
