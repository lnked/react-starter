import React, { Component } from 'react'
import WebStorage from 'react-webstorage'
import { Input, Button } from 'components'
import css from './styles.scss'

const webStorage = new WebStorage(window.localStorage ||
    window.sessionStorage
)

export default class AuthForm extends Component {

    constructor (props) {
        super(props)

        this.state = {save: false, login: '', password: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount () {
        this.setState({
            save: webStorage.getItem('save') === 'on'
        })

        this.setState({
            login: webStorage.getItem('login')
        })

        this.setState({
            password: webStorage.getItem('password')
        })
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()

        if (this.state.save) {
            webStorage.setItem('save', this.state.save)
            webStorage.setItem('login', this.state.login)
            webStorage.setItem('password', this.state.password)
        } else {
            webStorage.clear()
        }
    }

    inputItem (item, index) {
        return (
            <div className={css.login__row} key={index.toString()}>
                <Input
                    type={item.type}
                    name={item.name}
                />
            </div>
        )
        // handleChange={this.handleChange}
        // value={this.state[item.name]}
    }

    render () {
        const inputs = [
            {
                type: 'text',
                name: 'login'
            },
            {
                type: 'password',
                name: 'password'
            }
        ]

        return (
            <form action="" onSubmit={this.handleSubmit} className={css.login} method="POST">
                <div className={css.login__logo}>
                    <img
                        src={require('images/lightning.svg')}
                        className={css['not-found__figure__image']}
                        alt="Error: 4xx" />
                </div>

                <div className={css.login__body}>
                    {inputs.map(this.inputItem)}

                    <div className={css.login__row}>
                        <div className={css.login__row__col}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="save"
                                    value="1"
                                    onChange={this.handleChange}
                                />
                                {/* ckecked={this.state.save} */ }
                                <span className="c-checkbox__label__middle">Запомнить меня</span>
                            </label>
                        </div>

                        <div className={[css.login__row__col, css.login__row__col_last].join(' ')}>
                            <Button type="submit" label="Войти" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
