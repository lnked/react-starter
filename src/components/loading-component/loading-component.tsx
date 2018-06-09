import * as React from 'react'

import { LoadingComponentProps } from 'react-loadable'

export default class LoadingComponent extends React.Component<LoadingComponentProps> {
    render () {
        return (
            <div style={{ backgroundColor: 'lime' }}>
                {this.props.error}
                {this.props.isLoading}
                {this.props.pastDelay}
                {this.props.timedOut}
            </div>
        )
    }
}
