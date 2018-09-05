import * as React from 'react'

import { Present } from './present'

import { P } from './props'

export class Button extends React.PureComponent<P, {}> {
    static defaultProps = {
        type: 'button',
        icon: false,
        normal: false,
        disabled: false,
        handleClick: false,
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick()
        }
    }

    render () {
        return (
            <Present {...this.props} handleClick={this.handleClick} />
        )
    }
}
