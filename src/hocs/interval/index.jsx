// // Component : the one to be wrapped
// // state : initial state of our component
// // intervalFn : arbitrary function modifying state

// const HOC = (Component, state, intervalFn) => class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = state;
//   }

//   componentDidMount() {
//     this.intervals = [];
//   }

//   componentWillUnmount() {
//     this.intervals.forEach(clearInterval);
//   }

//   componentDidMount() {
//     this.setInterval(this.tick.bind(this), 1000);
//   }

//   setInterval() {
//     this.intervals.push(setInterval.apply(null, arguments));
//   }

//   tick() {
//     this.setState(intervalFn(this.state));
//   }

//   render() {
//     return <Component {...this.props} {...this.state} />
//   }
// };
