import * as React from 'react'
import * as css from '../styles.scss'

import store from 'store2'

import {
    Input,
    Button
} from 'components'

import { withRequest } from 'hocs'

import { prepareField } from 'helpers/handlers'

export interface P {
    title: string;
    policy: boolean;
    post: ((url: string, data: any) => any);
    handleSuccess: ((phone: string, response: any) => any);
}

export interface S {
    phone: string;
}

@withRequest
class Phone extends React.Component<P, S> {
    static defaultPorps = {
        policy: false
    }

    state = {
        phone: store.get('phone') || ''
    }

    handleChange = (e, value) => {
        this.setState({...this.state, [e.target.name]: value})
    }

    handleRequest = (e) => {
        e.preventDefault()
        const { post } = this.props
        const { phone } = this.state

        store.set('phone', phone)

        post('/account/verify', {
            phone: prepareField(phone)
        })
            .then(res => {
                console.log('REFERENCE_SUCCESS', res)

                if ([200, 201].indexOf(res.status) >= 0) {
                    this.props.handleSuccess(phone, res)
                }
            })
            .catch(res => {
                console.log('REFERENCE_ERROR', res)
            })
    }

    render () {
        const { phone } = this.state
        const { title } = this.props

        return (
            <React.Fragment>
                <h1 className={css.title}>{title}</h1>

                <div className={css.row}>
                    <Input
                        name="phone"
                        value={phone}
                        label="Номер мобильного телефона"
                        handleChange={this.handleChange}
                        masked={{
                            numericOnly: true,
                            delimiters: ['+7', ' (', ') ', '-', '-'],
                            blocks: [0, 0, 3, 3, 2, 2]
                        }}
                        // masked={{phone: true, phoneRegionCode: 'RU'}}
                    />
                </div>

                <Button
                    size="large"
                    variant="primary"
                    handleClick={this.handleRequest}
                    wide>Далее</Button>
            </React.Fragment>
        )
    }
}

export default Phone
