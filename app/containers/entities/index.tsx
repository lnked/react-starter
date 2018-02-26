import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

export default class Entities extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    Entities!
                </Aside>

                <Content>
                    Entities!
                </Content>
            </Layout>
        )
    }
}
