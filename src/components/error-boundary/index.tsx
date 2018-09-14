import * as React from 'react'

export interface PropsErrorBoundary {
    children?: JSX.Element[] | JSX.Element | string;
}

export interface StateErrorBoundary {
    error: boolean;
}

export class ErrorBoundary extends React.PureComponent<PropsErrorBoundary, StateErrorBoundary> {
    state = {
        error: false,
    }

    componentDidCatch (err: any, info: any) {
        this.setState({ error: true })
        console.error({ err }, { info })
    }

    render () {
        if (this.state.error) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
