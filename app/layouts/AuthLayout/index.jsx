import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import css from './styles.scss'

export default class AuthLayout extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    render () {
        return (
            <div className={css.layout}>
                <section className={css.layout__form}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
