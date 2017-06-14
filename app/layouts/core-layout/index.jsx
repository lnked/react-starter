import React, { PureComponent } from 'react'
import { propTypes, oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { SvgFixer } from 'utils'
import { Sidebar } from 'segments'
import { Navigation } from 'components'
import { Load, Page1 } from 'containers'

export default class CoreLayout extends PureComponent {

    static propTypes = {
        children: oneOfType([
            object,
            string,
            array
        ])
    }

    constructor (props) {
        super(props)

        this.state = {
            title: 'React Starter App'
        }
    }

    componentWillMount () {
        document.title = this.state.title
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <Router>
                <div className={css.layout}>
                    <header className={css.header}>
                        <Navigation />
                    </header>

                    <sidebar className={css.sidebar}>
                        <Sidebar />
                    </sidebar>

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
                </div>
            </Router>
        )
    }
}
