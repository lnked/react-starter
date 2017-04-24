// class Timer extends React.Component {
//     state = {
//         value: 0
//     }

//     intervalRef = undefined;

//     componentWillMount() {
//         this.intervalRef = setInterval(
//             () => this.setState(state => ({ value: state.value + 1 })),
//             1000
//         )
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalRef);
//     }

//     render() {
//         return <div>{ this.state.value }</div>
//     }
// }
