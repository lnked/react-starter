/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const routes: Route[] = [
    {
        path: '(.*)',
        status: 404,
        statusCode: 404,
        component: loadComponent(() =>
            import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "nomatch-page */ './')
        ),
        title: 'Error Page title',
        description: 'React starter kit',
    }
]
