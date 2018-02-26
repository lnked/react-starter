import React from 'react'
import { string } from 'prop-types'

interface IFooProps extends React.Props<Foo> {
    // ...
}

interface IFooState {
    // ...
}

export default class Foo extends Component<IFooProps, IFooState> {
    // ...
}



interface T {
    // ...
}

export class MyComponent extends React.Component<T, any> {
    static propTypes {
        myProp: React.PropTypes.string
    }
}

export default class Alert extends React.Component<Props, void> {
    static propTypes = getPropTypes(RuntimeProps)

    render () {
        const {
            children
        } = this.props

        return <div>{children}</div>
    }
}

