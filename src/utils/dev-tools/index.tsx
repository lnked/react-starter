import * as React from 'react'

import DevTools, { configureDevtool } from 'mobx-react-devtools'

configureDevtool({
    logEnabled: true,
    updatesEnabled: false,
    graphEnabled: false,
    logFilter: change => change.type === 'reaction',
})

export const MobXDevTools = () => {
    return (
        <DevTools noPanel />
    )
}
