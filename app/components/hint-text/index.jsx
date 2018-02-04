import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import css from './styles.scss'

export default class HintText extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render () {
        return (
            <div className={css.hint}>
                { this.props.text }
            </div>
        )
    }
}
