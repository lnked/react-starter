import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Layout extends Component {

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.object
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
