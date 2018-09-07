import { routes as MainRoute } from 'pages/main-page/route'
import { routes as ExampleRoute } from 'pages/example-page/route'
import { routes as NoMatchRoute } from 'pages/nomatch-page/route'

export const routes: any = [
    ...MainRoute,
    ...ExampleRoute,
    ...NoMatchRoute,
]
