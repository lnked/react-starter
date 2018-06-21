import * as React from 'react'
import * as css from '../styles.scss'

import { createMarkup } from 'helpers/handlers'

import {
    Input,
    Timer,
    Button
} from 'components'

import { withRequest } from 'hocs'

export interface P {
    phone: string;
    title: string;
    button: string;
    policy: boolean;
    post: ((url: string, data: any) => any);
    handleSuccess: ((phone: string, response: any) => any);
}

export interface S {
    code: number | string;
}

@withRequest
class Code extends React.Component<P, S> {
    static defaultPorps = {
        phone: '',
        title: '',
        button: '',
        policy: false
    }

    state = {
        code: ''
    }

    handleChange = (e, value) =>
        this.setState({...this.state, [e.target.name]: value})

    handleRequest = (e) => {
        e.preventDefault()

        const { post, phone } = this.props
        const { code } = this.state

        console.log('auth code: ', code, phone)

        post('/account/auth', {
            code,
            phone
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
        const { code } = this.state
        const { title, phone, button } = this.props

        return (
            <React.Fragment>
                <h1 className={css.title}>{title}</h1>

                <div
                    className={css.subTitle}
                    dangerouslySetInnerHTML={createMarkup('Введите код подтверждения,<br />отправленный вам на номер')}
                />

                <div className={css.phoneNumber}>{ phone }</div>

                <div className={css.singleRow}>
                    <Input
                        name="code"
                        label="SMS-код"
                        value={code}
                        masked={{ numericOnly: true, blocks: [6] }}
                        handleChange={this.handleChange}
                    />
                </div>

                <Timer
                    sec={30}
                    className={css.countdown}
                    mask="Отправить код ещё раз<br />через {tick} секунд"
                    handleCancel={() => { console.log('close') }}
                />

                <Button
                    size="large"
                    variant="primary"
                    handleClick={this.handleRequest}
                    wide>{button}</Button>
            </React.Fragment>
        )
    }
}

export default Code
