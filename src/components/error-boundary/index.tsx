import * as React from 'react'

interface P {
    children: any[] | React.ReactChild;
}

interface S {
    hasError: boolean;
}

export class ErrorBoundary extends React.PureComponent<P, S> {
    state = {
        hasError: false
    }

    componentDidCatch (error, info) {
        this.setState({ hasError: true })
        console.error({error}, {info})
    }

    render () {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
