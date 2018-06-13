import * as React from 'react'
import * as css from '../styles.scss'

import {
    Button,
    MapLayout
} from 'components'

export default function Location () {
    return (
        <React.Fragment>
            <h1 className={css.title}>Регистрация</h1>
            <MapLayout search={true} className={css.map} />
            <Button size="large" variant="primary" wide>Мое местоположение</Button>
        </React.Fragment>
    )
}
