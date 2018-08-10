/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

export const ExamplePage = loadComponent(() =>
    import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "ExamplePage" */ 'pages/example-page')
)

const locale: string = '/:locale(ru|en|de)'

export const routes: any = [
    {
        path: `${locale}/example`,
        component: ExamplePage,
    }
]
