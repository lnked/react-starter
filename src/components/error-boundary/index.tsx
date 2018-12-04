import * as React from 'react'

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

export interface State {
  error: boolean;
}

class ErrorBoundary extends React.PureComponent<Props, State> {

  state = {
    error: false,
  }

  componentDidCatch (err: any, info: any) {
    this.setState({ error: true }, () => console.error({ err }, { info }))
  }

  render () {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }

}

export default ErrorBoundary
export { ErrorBoundary }
