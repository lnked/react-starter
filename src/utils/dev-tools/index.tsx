/* global __DEV__ */

import * as React from 'react'

// import DevTools, { configureDevtool } from 'mobx-react-devtools'
// import DevTools from 'mobx-react-devtools'

if (__DEV__) {
    const { configureDevtool } = require('mobx-react-devtools')

    configureDevtool({
        logEnabled: true,
        updatesEnabled: false,
        graphEnabled: false,
        logFilter: change => change.type === 'reaction',
    })
}

export const MobXDevTools = () => {
    if (__DEV__) {
        const DevTools = require('mobx-react-devtools')

        return <DevTools noPanel />
    }

    return null
}
