import * as React from 'react'

interface T {
    load: any;
    children?: any;
}

interface S {
    component: any;
}

export class DynamicImport extends React.Component<T, S> {
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
        const { children } = this.props
        const { component } = this.state

        return children && children(component)
    }
}
