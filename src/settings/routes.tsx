import {
    NoMatch,
    MainPage,
    ChangelogPage
} from 'containers'

export const routes: any = [
    {
        path: '/',
        exact: true,
        component: MainPage
    }, {
        path: '/changelog',
        component: ChangelogPage
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]
