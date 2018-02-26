import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

export default class Globals extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    Globals!
                </Aside>

                <Content>
                    Globals!
                </Content>
            </Layout>
        )
    }
}
