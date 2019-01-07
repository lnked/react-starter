import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
// import * as serviceWorker from './service-worker'

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import App from './app'

import { createStore } from 'store'
import { environment } from 'settings'
import { browserHistory } from 'helpers'

const routingStore = new RouterStore()

const store = createStore(routingStore)

const history = syncHistoryWithStore(browserHistory, routingStore)

const appRoot = document.getElementById('app')

if (appRoot == null) {
  throw new Error('No root element')
}

const renderApp = () => {
  render(
    <Provider {...store}>
      <App history={history} />
    </Provider>,
    appRoot
  )
  document.body.classList.remove('loading')
}

if (environment.development && module.hot) {
  module.hot.accept('./app', renderApp)
} else if (environment.production) {
  const isHttps = location.protocol.indexOf('https') >= 0

  if ('serviceWorker' in navigator && isHttps) {
    // serviceWorker.register()
    navigator.serviceWorker.register('/sw.js')
  }
}

renderApp()
