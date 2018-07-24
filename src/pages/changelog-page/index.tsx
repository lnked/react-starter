import * as React from 'react'
import * as css from './styles.scss'

import {
    STORE_UI,
    STORE_APP,
    STORE_ROUTER
} from 'settings/constants'

import { inject, observer } from 'mobx-react'

import { Input } from 'components'

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
export class ChangelogPage extends React.Component<any, any> {
    componentDidMount () {
        document.title = 'Changelog Page'
    }

    render () {
        return (
            <div className={css.content}>
                {/*
                <Title size="huge" type="primary" center>Changelog Page</Title>
                <Title size="medium" type="secondary" center>Changelog Page</Title>
                */}

                <Input type="text" />

                <p className={css.description}>
                    Reference site about Lorem Ipsum, giving information on its origins.
                </p>
            </div>
        )
    }
}

export default ChangelogPage
