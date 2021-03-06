/* eslint-disable */
/* tslint:disable: max-line-length */

import { loadComponent } from 'utils'

const locale: string = '/:locale(ru|en|de)'

export const routes: Route[] = [
  {
    exact: true,
    path: `${locale}?`,
    component: loadComponent(() =>
      import(
        /* webpackChunkName: "main-page", webpackMode: "lazy-once", webpackPrefetch: true */
        './'
      ),
    ),
    title: 'Main Page title',
    description: 'React starter kit',
  }
]
