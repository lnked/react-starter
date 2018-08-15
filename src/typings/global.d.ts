declare var __VERSION__: string
declare var __IN_DEBUG__: boolean

// declare namespace React {
//     interface ReactChild {
//         [elemName: string]: any;
//     }
// }

declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }

    interface ElementClass {
        render: any;
    }

    interface ElementChildrenAttribute {
        children: {};
    }
}

declare module 'hocs'
declare module 'store'
declare module 'utils'
declare module 'theme'
declare module 'config'
declare module 'assets'
declare module 'typings'
declare module 'helpers'
declare module 'layouts'
declare module 'helpers/api'
declare module 'helpers/get'
declare module 'helpers/store'
declare module 'helpers/token'
declare module 'helpers/compare'
declare module 'helpers/request'
declare module 'helpers/handlers'
declare module 'helpers/predicts'
declare module 'loadable-components'
declare module 'mobx'
declare module 'mobx-react'
declare module 'mobx-react-router'
declare module 'images'
declare module 'styles'
declare module 'scripts'
declare module 'svgstore'
declare module 'modules'
declare module 'settings'
declare module 'settings/routes'
declare module 'settings/firebase'
declare module 'settings/constants'
declare module 'components'
declare module 'pages'
