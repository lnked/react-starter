import * as React from 'react'

import 'styles/client.scss'

import { hot } from 'react-hot-loader'

import { Router, Switch } from 'react-router-dom'

import { CoreLayout } from 'layouts'

import { ErrorBoundary } from 'components'

import { renderRoute, renderDevTools } from 'utils'

import { environment } from 'settings'

import { routes } from './routes'

function App ({ history }: any) {
  return (
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
  )
}

export default hot(module)(App)
