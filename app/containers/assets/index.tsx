import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

export default class Assets extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    Assets!
                </Aside>

                <Content>
                    Assets!
                </Content>
            </Layout>
        )
    }
}
