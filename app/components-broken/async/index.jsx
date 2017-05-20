export default class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    this.props.loader().then((Component) => {
      this.setState({ Component });
    });
  }

  render() {
    const { Component } = this.state;
    // `loader` prop unused. It is extracted so we don't pass it down to wrapped component
    // eslint-disable-next-line no-unused-vars
    const { renderPlaceholder, placeholderHeight, loader, ...rest } = this.props;
    if (Component) {
      return <Component {...rest} />;
    }

    return renderPlaceholder ?
      renderPlaceholder() :
      <WrappedPlaceholder height={placeholderHeight} />;
  }
}


AsyncComponent.propTypes = {
  // specifically loader is a function that returns a promise. The promise
  // should resolve to a renderable React component.
  loader: PropTypes.func.isRequired,
  placeholderHeight: PropTypes.number,
  renderPlaceholder: PropTypes.func,
};