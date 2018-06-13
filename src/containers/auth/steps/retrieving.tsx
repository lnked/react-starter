import * as React from 'react'
import * as css from '../styles.scss'

import {
    // Link,
    Input,
    Button
} from 'components'

export default function Retrieving () {
    return (
        <React.Fragment>
            <h1 className={css.title}>Регистрация</h1>

            <div className={css.fields}>
                <div className={css.row}>
                    <Input name="name" value="Иванченко Николай Олегович" label="ФИО" />
                </div>

                <div className={css.row}>
                    <Input name="email" label="Email (необязательно)" />
                </div>

                <div className={css.row}>
                    <Input name="org" label="Организация" />
                </div>
            </div>

            <Button size="large" variant="primary" wide>Далее</Button>
        </React.Fragment>
    )
}
