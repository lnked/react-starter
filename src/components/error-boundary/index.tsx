import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

export interface State {
  error: boolean;
  info: any;
}

const StyledError = styled.div`
  background: #f00;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  outline: 0;
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const StyledDetails = styled.details`
  whiteSpace: 'pre-wrap';
`

class ErrorBoundary extends React.PureComponent<Props, State> {

  state = {
    error: false,
    info: null,
  }

  componentDidCatch (error: Error | boolean, info: unknown) {
    this.setState({
      error,
      info,
    })
  }

  render () {
    const { error, info } = this.state

    if (error) {
      return (
        <StyledError>
          <h1>Something went wrong.</h1>

          <StyledDetails>
            {JSON.stringify(info)}
          </StyledDetails>
        </StyledError>
      )
    }

    return this.props.children
  }

}

export { ErrorBoundary }
export default ErrorBoundary
