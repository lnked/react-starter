import * as React from 'react'

const { __DEV__ } = process.env

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
