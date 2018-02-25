import * as React from 'react'
import { string } from 'prop-types'
import * as css from './styles'

export default class Prompt extends React.PureComponent<{}, {}> {
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
