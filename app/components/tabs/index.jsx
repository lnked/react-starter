import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class Tabs extends React.PureComponent<{}, {}> {
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
