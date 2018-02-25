class MyComponent extends React.Component {
  state = {
    AnotherComponent: null
  };

  componentWillMount() {
    import('./another-component').then(AnotherComponent => {
      this.setState({ AnotherComponent });
    });
  }

  render() {
    let {AnotherComponent} = this.state;
    if (!AnotherComponent) {
      return <div>Loading...</div>;
    } else {
      return <AnotherComponent/>;
    };
  }
}
