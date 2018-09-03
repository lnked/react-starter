import * as React from 'react'
import * as css from './styles.scss'

import { Card, Input } from 'components'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

import { inject, observer } from 'mobx-react'

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
class ExamplePage extends React.Component<any, any> {
    componentDidMount () {
        document.title = 'Example Page'
    }

    render () {
        return (
            <div className={css.content}>
                {/*
                <Title size="huge" type="primary" center>Example Page</Title>
                <Title size="medium" type="secondary" center>Example Page</Title>
                */}

                <Input type="text" />

                <Card>
                    xxx
                </Card>

                <Card>
                    xxx
                </Card>

                <Card>
                    xxx
                </Card>
            </div>
        )
    }
}

// export { ExamplePage }
export default ExamplePage
