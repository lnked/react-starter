import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'components'

export default class AuthLayout extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
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
