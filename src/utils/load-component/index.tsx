import loadable from '@loadable/component'

import { Loading } from 'fragments'

// export const Home = loadable(() => import('./Home'), {
//     LoadingComponent: (props) => <div>Loading...</div>,
//     ErrorComponent: ({ error, props }) => <div>Oups an error occurs.</div>,
// })

export const loadComponent = (resolve: any, options: any = {}): any =>
  loadable(resolve, {
    LoadingComponent: Loading,
    // LoadingComponent: (props: any) => <div>{JSON.stringify(props)} Loading...</div>,
    // ErrorComponent: ({ error, props }: { error: any, props: any }) => (
    //     <div>
    //         {JSON.stringify(error)}
    //         {JSON.stringify(props)}
    //         Oups an error occurs.
    //     </div>
    // ),
    ...options,
  })

export default loadComponent
