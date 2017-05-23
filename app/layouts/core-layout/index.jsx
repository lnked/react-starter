import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import { FadeIn } from 'animate-components'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { SvgFixer } from 'utils'
import { Navigation } from 'components'
import { Sidebar } from 'segments'
import { Load, Page1 } from 'containers'

export default class CoreLayout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

    constructor (props) {
        super(props)

        this.state = {
            title: 'React Starter App'
        }
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <Router>
                <DocumentTitle title={this.state.title || 'Untitled'}>
                    <div className={css.layout}>
                        <header className={css.header}>
                            <Navigation />
                        </header>

                        <sidebar className={css.sidebar}>
                            <Sidebar />
                        </sidebar>

                        <FadeIn duration="2s" timingFunction="ease-out">
                            <section className={css.main}>
                                <div className={css.content}>
                                    {this.props.children}
                                    <Route exact path="/site" component={Page1}/>
                                    <Route path="/site/*" component={Load}/>
                                    <Route path="/marketing" component={Page1}/>
                                    <Route path="/seo" component={Page1}/>
                                    <Route path="/users" component={Page1}/>
                                    <Route path="/shop" component={Page1}/>
                                    <Route path="/system" component={Page1}/>
                                </div>
                            </section>
                        </FadeIn>
                    </div>
                </DocumentTitle>
            </Router>
        )
    }
}
