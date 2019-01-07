import * as React from 'react'
import loadable from '@loadable/component'

import { Loading } from 'fragments'
import { ErrorDisplay } from './error-display'

export const loadComponent = (resolve: any): any => loadable(resolve, {
  LoadingComponent: <Loading />,
  rorComponent: ErrorDisplay,
})
