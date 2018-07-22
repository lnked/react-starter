import * as React from 'react'
import loadable from 'loadable-components'

// import { Preloader } from 'utils'

// import { MainPage } from 'pages'

export const MainPage = loadable(() => import('pages/main-page'), {
    LoadingComponent: (props: any) => <div>{JSON.stringify(props)} Loading...</div>,
    ErrorComponent: ({ error, props }: { error: any, props: any }) => (
        <div>
            {JSON.stringify(error)}
            {JSON.stringify(props)}
            Oups an error occurs.
        </div>
    )
})

export const NoMatch = loadable(() => import('pages/nomatch'), {
    LoadingComponent: (props: any) => <div>{JSON.stringify(props)} Loading...</div>,
    ErrorComponent: ({ error, props }: { error: any, props: any }) => (
        <div>
            {JSON.stringify(error)}
            {JSON.stringify(props)}
            Oups an error occurs.
        </div>
    )
})

export const ChangelogPage = loadable(() => import('pages/changelog-page'), {
    LoadingComponent: (props: any) => <div>{JSON.stringify(props)} Loading...</div>,
    ErrorComponent: ({ error, props }: { error: any, props: any }) => (
        <div>
            {JSON.stringify(error)}
            {JSON.stringify(props)}
            Oups an error occurs.
        </div>
    )
})

// export const Home = loadable(() => import('./Home'), {
//     LoadingComponent: (props) => <div>Loading...</div>,
//     ErrorComponent: ({ error, props }) => <div>Oups an error occurs.</div>,
// })

/* eslint-disable */
/* tslint:disable:max-line-length */
export const routes: any = [
    {
        path: '/',
        exact: true,
        component: MainPage
        // resolve: () => import(/* webpackChunkName: "MainPage" */ 'pages/main-page')
    },
    {
        path: '/changelog',
        component: ChangelogPage,
        // resolve: () => import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ 'pages/changelog-page')
    },
    {
        status: 404,
        statusCode: 404,
        component: NoMatch
        // resolve: () => import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ 'pages/nomatch')
    }
]
