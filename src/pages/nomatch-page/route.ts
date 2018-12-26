/* eslint-disable */
/* tslint:disable: max-line-length */

import { loadComponent } from 'utils'

export const routes: Route[] = [
  {
    path: '(.*)',
    status: 404,
    statusCode: 404,
    component: loadComponent(() =>
      import(/* webpackPrefetch: true */ './')
    ),
    title: 'Error Page title',
    description: 'React starter kit',
  }
]
