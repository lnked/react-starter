import * as React from 'react'
import * as Loadable from 'react-loadable'

export default class LoadingComponent extends React.Component<Loadable.LoadingComponentProps, {}> {
    render () {
        const { children } = this.props
        return (
            <div>
                <div>
                    <div>Loading</div>
                    {children && <div>{children}</div>}
                </div>
            </div>
        )
    }
}

// const LoadingComponent = ({isLoading, error}) => {
//     // Handle the loading state
//     if (isLoading) {
//         return <div>Loading...</div>
//     } else if (error) {
//         return <div>Sorry, there was a problem loading the page.</div>
//     } else {
//         return null
//     }
// }

// export default LoadingComponent

// const LoadableComponent = Loadable({
//     loader: () => import('containers/home'),
//     LoadingComponent: Loading,
//     delay: 300,
// })

// export default function PreLoader () {
//     return <LoadableComponent />
// }

// export default function PreLoader (InputComponent) {
//     return class extends React.Component {
//         render() {
//             return <InputComponent {...this.props} />;
//         }
//     }
// }
