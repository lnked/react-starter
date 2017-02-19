import React, { Component } from 'react';

export default class Home extends Component {
    render () {
        return (<h1>Welcome to Home Page</h1>);
    }
}

handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}

jumpTo(step) {
  this.setState({
    stepNumber: step,
    xIsNext: (step % 2) ? false : true,
  });
}

<button className="square" onClick={() => this.setState({value: 'X'})}>
    {this.state.value}
</button>
// 
// 
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
