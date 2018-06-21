import * as React from 'react'

export interface S {
    Component: any;
}

export default (loader, collection) => (class AsyncComponent extends React.Component<{}, S> {
    state = {
        Component: null
    }

    componentDidMount () {
        if (!this.state.Component) {
            loader().then((Component) => {
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
