import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'components'
import { Navigation, Sidebar } from 'segments'

export default class CoreLayout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

    componentWillMount () {
        window.prerenderReady = true

        setTimeout(() => {
            SvgFixer()
        }, 300)
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
