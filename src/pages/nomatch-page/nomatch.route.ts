/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const NoMatch = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "NoMatch" */ 'pages/nomatch')
)

export const routes: any = [
    {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]
