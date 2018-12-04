import * as React from 'react'
import { environment } from 'settings/environment'

export function renderDevTools (noPanel = false) {
  if (environment.development) {
    const { configureDevtool } = require('mobx-react-devtools')

    configureDevtool({
      logEnabled: true,
      updatesEnabled: false,
      graphEnabled: false,
      logFilter: (change: any) => change.type === 'reaction',
    })

    const DevTools = require('mobx-react-devtools').default

    return <DevTools noPanel={noPanel} />
  }

  return null
}
