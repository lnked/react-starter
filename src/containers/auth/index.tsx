import * as React from 'react'

import store from 'store2'

import { Box } from 'segments'

import { TOKEN } from 'helpers/token'

import { Redirect } from 'react-router-dom'

import {
    Auth,
    Code,
    Phone,
    Location,
    Retrieving,
    Organization
} from './steps'

interface P {
    match: any;
}

interface S {
    phone: string;
    ActiveComponent: any | boolean;
}

export default class AuthPage extends React.Component<P, S> {
    redirect: string = ''

    state = {
        phone: store.get('phone') || '',
        ActiveComponent: false
    }

    componentDidMount () {
        document.title = 'Вход и регистрация'
    }

    getStepName = () => {
        const step = this.props.match.params.step
        const pathname = window.location.pathname.split('/')

        return (step || pathname[pathname.length - 1]).toLowerCase()
    }

    handleSuccess = (phone, res) => {
        console.log('phone: ', phone)
        console.log('data: ', res.data)
        console.log('code: ', res.data.code)

        if (res.data && res.data.token) {
            TOKEN.set(res.data.token)
            this.redirect = '/marketplace'

            this.setState({ phone }, () => {
                this.redirect = ''
            })
        } else {
            this.redirect = '/auth/verify'

            this.setState({ phone }, () => {
                this.redirect = ''
            })
        }
    }

    loadComponent = (step) => {
        const { phone } = this.state

        console.log('step: ', step)
        console.log('step: ', phone)

        switch (step) {
            case 'sms':
                return (
                    <Phone
                        title="Вход"
                        handleSuccess={this.handleSuccess}
                    />
                )
            case 'registration':
                return (
                    <Phone
                        title="Регистрация"
                        handleSuccess={this.handleSuccess}
                        policy
                    />
                )
            case 'verify':
                return (
                    <Code
                        title="Вход"
                        button="Войти"
                        phone={phone}
                        handleSuccess={this.handleSuccess}
                    />
                )
            case 'organization':
                return <Organization />
            case 'location':
                return <Location />
            case 'retrieving':
                return <Retrieving />
            default:
                return <Auth />
        }
    }

    render () {
        const step = this.getStepName()

        console.log('this.redirect: ', this.redirect)

        if (this.redirect) {
            return <Redirect push to={this.redirect} />
        }

        return (
            <Box>
                {/* <h3>{ step }</h3> */}
                { this.loadComponent(step) }
            </Box>
        )
    }
}
