import * as React from 'react'
import loadable from '@loadable/component'

import { Loading } from 'fragments'

// export const Home = loadable(() => import('./Home'), {
//     LoadingComponent: (props) => <div>Loading...</div>,
//     ErrorComponent: ({ error, props }) => <div>Oups an error occurs.</div>,
// })

export const loadComponent = (resolve: any): any => loadable(resolve, {
  fallback: <Loading />,
})

export default loadComponent
