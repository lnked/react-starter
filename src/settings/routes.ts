/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const MainPage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackChunkName: "MainPage" */ 'pages/main-page')
)

export const ExamplePage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "ExamplePage" */ 'pages/example-page')
)

export const NoMatch = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "NoMatch" */ 'pages/nomatch')
)

const locale: string = '/:locale(ru|en|de)?'

export const routes: any = [
    {
        path: `${locale}/`,
        exact: true,
        component: MainPage
    },
    {
        path: `${locale}/example`,
        component: ExamplePage,
    },
    {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]
