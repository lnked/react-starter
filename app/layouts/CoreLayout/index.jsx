import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'utils'
import { Navigation, Sidebar } from 'segments'
import { Icon } from 'microicon'

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
    }

    componentDidMount () {
        SvgFixer()
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
                        <Icon name="heart" size={32} color="tomato" />
                    </div>
                </section>
            </div>
        )
        // https://icon.now.sh/chevron/32
    }
}
