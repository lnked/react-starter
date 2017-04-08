import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/sidebar'
import Navigation from 'components/navigation'
import css from './styles.scss'

export default class CoreLayout extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    render () {
        return (
            <div className={css.layout}>
                <header className={css.layout__header}>
                    <Navigation />
                </header>

                <sidebar className={css.layout__sidebar}>
                    <Sidebar />
                </sidebar>

                <section className={css.layout__main}>
                    <div className={css.layout__main__content}>
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
