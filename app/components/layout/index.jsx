import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class Layout extends React.PureComponent<{}, {}> {
    static propTypes = {
        className: string,
        children: oneOfType([
            array,
            string,
            object
        ])
    }

    static defaultProps = {
        className: '',
        children: ''
    }

    render () {
        return (
            <div className={`${css.layout} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}
