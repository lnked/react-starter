import * as React from 'react'

import { Content } from 'segments'

export default class Locale extends React.Component<{}, {}> {
    render () {
        return (
            <Content>
                Locale!<br /><br />
                dictionary<br />
                localization
            </Content>
        )
    }
}
