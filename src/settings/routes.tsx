export const routes: any = [
    {
        path: '/',
        exact: true,
        resolve: () => import(
            /*
                webpackMode: "lazy",
                webpackChunkName: "MainPage"
            */
            'pages/main-page'
        )
    }, {
        path: '/changelog',
        resolve: () => import(
            /*
                webpackMode: "lazy",
                webpackChunkName: "ChangelogPage"
            */
            'pages/changelog-page'
        )
    }, {
        status: 404,
        statusCode: 404,
        resolve: () => import(
            /*
                webpackMode: "lazy",
                webpackChunkName: "NoMatch"
            */
            'pages/nomatch'
        )
    }
]
