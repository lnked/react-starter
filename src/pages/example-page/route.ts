/* eslint-disable */
/* tslint:disable: max-line-length */

import { loadComponent } from 'utils'

const locale: string = '/:locale(ru|en|de)'

export const routes: Route[] = [
  {
    path: `${locale}/example`,
    component: loadComponent(() =>
      import(/* webpackPrefetch: true */  './')
    ),
    title: 'Example Page',
    description: 'React starter kit',
  }
]
