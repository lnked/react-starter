import * as React from 'react'

import 'styles/client.scss'

import { hot } from 'react-hot-loader'

import { Router, Switch } from 'react-router-dom'

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import { createStore } from 'store'

import { Provider } from 'mobx-react'

import { CoreLayout } from 'layouts'

import { ErrorBoundary } from 'components'

import { browserHistory } from 'helpers'

import { renderRoute, renderDevTools } from 'utils'

import { routes } from 'settings/routes'

import { environment } from 'settings/environment'

// Stores
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const initialState = (window && window.__INITIAL_STATE__) || {}

const stores = createStore(routingStore, initialState)

function App () {

  return (
    <Provider {...stores}>
      <ErrorBoundary>
        <Router history={history}>
          <CoreLayout>
            <Switch>
              {routes && routes.map(renderRoute)}
            </Switch>

            {environment.development && renderDevTools()}
          </CoreLayout>
        </Router>
      </ErrorBoundary>
    </Provider>
  )

}

export default hot(module)(App)
