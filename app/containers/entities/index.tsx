import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

import { GroupLinks } from 'components'

export default class Entities extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    <GroupLinks
                        base="entities"
                        links={[
                            {
                                name: 'Новости',
                                slug: 'news'
                            },
                            {
                                name: 'Фотогалерея',
                                slug: 'gallery'
                            }
                        ]}
                    />
                </Aside>

                <Content>
                    Entities!
                </Content>
            </Layout>
        )
    }
}
