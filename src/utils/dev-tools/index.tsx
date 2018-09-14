/* global __DEV__ */

import * as React from 'react'

if (__DEV__) {
    const { configureDevtool } = require('mobx-react-devtools')

    configureDevtool({
        logEnabled: true,
        updatesEnabled: false,
        graphEnabled: false,
        logFilter: (change: any) => change.type === 'reaction',
    })
}

export const MobXDevTools = () => {
    if (__DEV__) {
        const DevTools = require('mobx-react-devtools').default

        return <DevTools noPanel />
    }

    return null
}
