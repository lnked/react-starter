/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const MainPage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackChunkName: "MainPage" */ 'pages/main-page')
)

const locale: string = '/:locale(ru|en|de)'

export const routes: any = [
    {
        exact: true,
        path: `${locale}?`,
        component: MainPage
    }
]
