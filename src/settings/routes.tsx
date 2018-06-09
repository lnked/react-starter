// import {
//     NoMatch,
//     MainPage,
//     ChangelogPage
// } from 'containers'

export const routes: any = [
    {
        path: '/',
        exact: true,
        resolve: () => import(/* webpackMode: "lazy" webpackChunkName: "MainPage" */ 'containers/main-page')
        // component: MainPage
    }, {
        path: '/changelog',
        resolve: () => import(/* webpackMode: "lazy" webpackChunkName: "ChangelogPage" */ 'containers/changelog-page')
        // component: ChangelogPage
    }, {
        status: 404,
        statusCode: 404,
        resolve: () => import(/* webpackMode: "lazy" webpackChunkName: "NoMatch" */ 'containers/nomatch')
        // component: NoMatch
    }
]
