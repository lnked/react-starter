import * as React from 'react'

export interface P {
    load: any;
    children?: React.ReactChild;
}

export interface S {
    component: any;
}

export default class DynamicImport extends React.Component<P, S> {
    state = {
        component: null
    }

    componentDidMount () {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default ? component.default : component
                }))
            })
    }

    render () {
        return this.props.children(this.state.component)
    }
}
