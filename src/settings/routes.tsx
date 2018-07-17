/* eslint-disable */
/* tslint:disable:max-line-length */
export const routes: any = [
    {
        path: '/',
        exact: true,
        resolve: () => import(
            /*
                webpackChunkName: "MainPage"
            */
            'pages/main-page'
        )
    }, {
        path: '/changelog',
        resolve: () => import(
            /*
                webpackChunkName: "ChangelogPage"
            */
            'pages/changelog-page'
        )
    }, {
        status: 404,
        statusCode: 404,
        resolve: () => import(
            /*
                webpackChunkName: "NoMatch"
            */
            'pages/nomatch'
        )
    }
]
