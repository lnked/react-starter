/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const MainPage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackChunkName: "MainPage" */ 'pages/main-page')
)

export const ChangelogPage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackChunkName: "ChangelogPage" */ 'pages/changelog-page')
)

export const NoMatch = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackChunkName: "NoMatch" */ 'pages/nomatch')
)

export const routes: any = [
    {
        path: '/',
        exact: true,
        component: MainPage
    },
    {
        path: '/changelog',
        component: ChangelogPage,
    },
    {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]
