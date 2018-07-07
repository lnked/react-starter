import * as React from 'react'

export interface S {
    Component: any;
}

export const AsyncComponent = (loader: any, collection: any) => (class AsyncComponent extends React.Component<{}, S> {
    state = {
        Component: null
    }

    componentDidMount () {
        if (!this.state.Component) {
            loader().then((Component: any) => {
                this.setState({ Component })
            })
        }
    }

    render () {
        const { Component } = this.state

        if (Component) {
            return (
                // @ts-ignore
                <Component { ...this.props } { ...collection } />
            )
        }

        return null
    }
})
