// function logProps (WrappedComponent) {
//     return class extends React.Component {
//         static getDerivedStateFromProps(nextProps, prevState) {
//             console.log('Next props: ', nextProps)
//             console.log('Prev state: ', prevState)

//             return {
//                 ...prevState,
//                 ...nextProps
//             }
//         }

//         render() {
//             // Wraps the input component in a container, without mutating it. Good!
//             return <WrappedComponent {...this.props} />
//         }
//     }
// }
