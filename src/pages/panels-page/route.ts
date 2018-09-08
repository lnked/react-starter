/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

const locale: string = '/:locale(ru|en|de)'

export const routes: Route[] = [
    {
        path: `${locale}/panels`,
        component: loadComponent(() =>
            import(/* webpackChunkName: "panels.page" */ './')
        ),
        title: 'Panels Page title',
        description: 'React starter kit',
    }
]
