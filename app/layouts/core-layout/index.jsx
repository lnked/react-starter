import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { SvgFixer } from 'utils'
import { Sidebar } from 'segments'
import { Navigation } from 'components'
import { Page1 } from 'containers'
// import { Load, Page1 } from 'containers'

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
        // import {Helmet} from "react-helmet"
        // <div className="application">
        //     <Helmet>
        //         <meta charSet="utf-8" />
        //         <title>My Title</title>
        //         <link rel="canonical" href="http://mysite.com/example" />
        //     </Helmet>
        // </div>

        // <Parent>
        //     <Helmet>
        //         <title>My Title</title>
        //         <meta name="description" content="Helmet application" />
        //     </Helmet>

        //     <Child>
        //         <Helmet>
        //             <title>Nested Title</title>
        //             <meta name="description" content="Nested component" />
        //         </Helmet>
        //     </Child>
        // </Parent>
        return (
            <Router>
                <div className={css.layout}>
                    <header className={css.header}>
                        <Navigation />
                    </header>

                    <aside className={css.sidebar}>
                        <Sidebar />
                    </aside>

                    <section className={css.main}>
                        <div className={css.content}>
                            {this.props.children}
                            <Route exact path="/site" component={Page1}/>

                            {/*
                                <Route path="/site/*" component={Load}/>
                            */}

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
