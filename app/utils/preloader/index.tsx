// import * as React from 'react'
// import * as Loadable from 'react-loadable'

// import { Loader } from 'components'

// interface T {
//     error: Error | null;
//     pastSpinnerDelay: boolean;
//     timedOut: boolean;
//     loading: boolean;
//     pastDelay: null;
// }

// let Loading = ({error, loading, pastSpinnerDelay, timedOut, pastDelay}: T) => {
//     console.log(error, loading, pastSpinnerDelay, timedOut, pastDelay)

//     if (error) {
//         return <div>Error!</div>
//     } else if (timedOut) {
//         return <div>Taking a long time...</div>
//     } else if (pastDelay) {
//         return <div><Loader />Loading...</div>
//     } else {
//         return null
//     }
// }

// const LoadableComponent = Loadable({
//     loader: () => import('containers/home'),
//     LoadingComponent: Loading,
//     delay: 300,
// })

// export default function PreLoader () {
//     return <LoadableComponent />
// }

// // export default function PreLoader (InputComponent) {
// //     return class extends React.Component {
// //         componentWillReceiveProps(nextProps) {
// //             console.log('Current props: ', this.props);
// //             console.log('Next props: ', nextProps);
// //         }

// //         render() {
// //             return <InputComponent {...this.props} />;
// //         }
// //     }
// // }
