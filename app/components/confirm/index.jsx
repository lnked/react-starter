import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import * as css from './styles'

export default class Confirm extends React.PureComponent<{}, {}> {
    static propTypes = {
        title: string
    }

    static defaultProps = {
        title: ''
    }

    render () {
        return (
            <div className={css.badge}>{ this.props.title }</div>
        )
    }
}
