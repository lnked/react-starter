// function logProps (WrappedComponent) {
//     return class extends React.Component {
//         componentWillReceiveProps (nextProps) {
//             console.log('Current props: ', this.props)
//             console.log('Next props: ', nextProps)
//         }
//         render() {
//             // Wraps the input component in a container, without mutating it. Good!
//             return <WrappedComponent {...this.props} />
//         }
//     }
// }
