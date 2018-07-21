// import {
//     // MainPage
//     // NoMatch,
//     // ChangelogPage
// } from 'pages'

/* eslint-disable */
/* tslint:disable:max-line-length */
export const routes: any = [
    {
        path: '/',
        exact: true,
        // component: MainPage
        resolve: () => import(/* webpackChunkName: "MainPage" */ 'pages/main-page')
    },
    {
        path: '/changelog',
        // component: ChangelogPage,
        resolve: () => import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ 'pages/changelog-page')
    },
    {
        status: 404,
        statusCode: 404,
        // component: NoMatch
        resolve: () => import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ 'pages/nomatch')
    }
]
