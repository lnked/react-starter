import * as pages from 'pages'

const routes: any = []

Object.keys(pages).map((name: string) => routes.push(...pages[name]))

export { routes }
