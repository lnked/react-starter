import { Component } from "React";

export var Enhance = ComposedComponent => class extends Component {
  constructor() {
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};

// import { Enhance } from "./Enhance";

// class MyComponent {
//   render() {
//     if (!this.data) return <div>Waiting...</div>;
//     return <div>{this.data}</div>;
//   }
// }

// export default Enhance(MyComponent); // Enhanced component